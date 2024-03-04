import React, {useState} from 'react';
import "./coursesList.scss"
import {AxiosInstance} from "axios";
import {useForm} from "react-hook-form";
import Text from "../../reusable/Text/Text";

type CoursesProps = {
    courses: CourseProps[],
    setCourses: React.Dispatch<React.SetStateAction<any>>,
    client: AxiosInstance,
    selectedEvent: string
}

export type CourseProps = {
    _id: string
    title: string
    description: string
    image: string
    details: {
        description: string
        dates: string[]
        age: {
            start: number
            end: number
        }
        placesAvailable: number
        timetables: {
            start: string
            end: string
        }
        days: string[]
        price: number
        images: string[]
        formElementsList: string[]
    }
}

const convertToBase64 = (file: Blob) => {
    return new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);
        fileReader.onload = () => {
            resolve(fileReader.result)
        };
        fileReader.onerror = (error) => {
            reject(error)
        }
    })
}

const CoursesList = ({courses, setCourses, client, selectedEvent}: CoursesProps) => {
    const {
        register,
        watch,
        reset,
        formState: {errors},
        setValue,
        handleSubmit
    } = useForm({
        mode: "onChange",
        reValidateMode: "onChange",
    });

    const [editCourseObj, setEditCourseObj] = useState({
        value: {},
        id: ''
    })
    const [postImage, setPostImage] = useState({image: ""})

    const selectCourse = (id: string) => {
        const selectedCourse = courses.filter((course) => course._id === id)
        if (selectedCourse) {
            setEditCourseObj({
                value: selectedCourse[0],
                id
            })
        }

        setValue('title', selectedCourse[0].title)
        setValue('description', selectedCourse[0].description)
        setValue('image', selectedCourse[0].image)
        setValue('detailedDescription', selectedCourse[0].details.description)
        setValue('dates', selectedCourse[0].details.dates[0])
        setValue('startAge', selectedCourse[0].details.age.start)
        setValue('endAge', selectedCourse[0].details.age.end)
        setValue('placesAvailable', selectedCourse[0].details.placesAvailable)
        setValue('startTimetables', selectedCourse[0].details.timetables.start)
        setValue('endTimetables', selectedCourse[0].details.timetables.end)
        setValue('days', selectedCourse[0].details.days)
        setValue('price', selectedCourse[0].details.price)
        setValue('detailedImages', selectedCourse[0].details.images[0])
        setValue('formElementsList', selectedCourse[0].details.formElementsList)
    }

    const createCourse = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const newCourse = {
            "title": watch("title"),
            "description": watch("description"),
            "image": postImage.image,
            "details": {
                "description": watch("detailedDescription"),
                "dates": [watch("dates")],
                "age": {
                    "start": Number(watch("startAge")),
                    "end": Number(watch("endAge"))
                },
                "placesAvailable": Number(watch("placesAvailable")),
                "timetables": {
                    "start": watch("startTimetables"),
                    "end": watch("endTimetables")
                },
                "days": watch("days"),
                "price": Number(watch("price")),
                "images": [watch("detailedImages")],
                "formElementsList": watch("formElementsList")
            }
        }

        if (newCourse) {
            await client.post('/courses', newCourse)
        }

        reset()
    }

    const editCourse = async (e: React.FormEvent<HTMLFormElement>, id: string) => {
        e.preventDefault();

        const editedCourse = {
            "title": watch("title"),
            "description": watch("description"),
            "image": postImage.image,
            "details": {
                "description": watch("detailedDescription"),
                "dates": [watch("dates")],
                "age": {
                    "start": Number(watch("startAge")),
                    "end": Number(watch("endAge"))
                },
                "placesAvailable": Number(watch("placesAvailable")),
                "timetables": {
                    "start": watch("startTimetables"),
                    "end": watch("endTimetables")
                },
                "days": watch("days"),
                "price": Number(watch("price")),
                "images": [watch("detailedImages")],
                "formElementsList": watch("formElementsList")
            }
        }

        if (editedCourse) {
            await client.patch(`/courses/${id}`, editedCourse)
        }

        reset()
    }

    const deleteCourse = async (id: string) => {
        await client.delete(`/courses/${id}`)
        const updatedCustomers = courses.filter((course: CourseProps) => course._id !== id)
        setCourses(updatedCustomers)
    }

    const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files && e.target.files[0];
        if (file) {
            const base64 = await convertToBase64(file)
            setPostImage({...postImage, image: base64 as string})
        }
    }

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        console.log(e)
    }

    return (
        <section id="courses-list">
            <div className="courses">
                {
                    courses && courses.filter((course: CourseProps) => selectedEvent ? course.title === selectedEvent : course).map((course: CourseProps, index: number) => (
                        <div key={index} className="course" onClick={() => selectCourse(course._id)}>
                            <div className="data">
                                <div className="row">
                                    <Text type={"h4"} color={"#fe5d37"}>{course.title}</Text>
                                </div>
                            </div>

                            <div className="trash" onClick={() => deleteCourse(course._id)}/>
                        </div>
                    ))
                }

            </div>

            <form
                // onSubmit={handleSubmit((e: any) => editCourseObj.id ? editCourse(e, editCourseObj.id) : createCourse(e))}
                // onSubmit={handleSubmit((e: any) => onSubmit(e))}

                onSubmit={editCourseObj.id ? (e) => editCourse(e, editCourseObj.id) : (e) => createCourse(e)}
                // onSubmit={(e) => handleSubmit(editCourseObj.id ? editCourse(e, editCourseObj.id) : createCourse)}
                // onSubmit={(e) => handleSubmit(createCourse(e))}
            >
                <div className="row">
                    <label htmlFor="title">Titolo</label>
                    <input {...register('title', {required: true})} name={"title"} type="text" placeholder={"Title"}/>
                </div>

                <div className="row">
                    <label htmlFor="description">Descrizione</label>
                    <textarea {...register('description')} name="description" placeholder={"Description"}/>
                </div>

                <div className="row">
                    <label htmlFor="image">Immagine</label>
                    {/*<input {...register('image')} name={"image"} type="text" placeholder={"Image"}*/}
                    {/*/>*/}

                    <input {...register('image')} name={"image"} type="file" accept={'jpeg, .png, .jpg'}

                           onChange={(e) => handleFileUpload(e)}
                    />
                    <img src={watch('image')} alt="" height={100} width={100}/>
                </div>

                <div className="row">
                    <label htmlFor="detailedDescription">Descrizione dettagliata</label>
                    <textarea {...register('detailedDescription')} name="detailedDescription"
                              placeholder={"Detailed Description"}/>
                </div>

                <div className="row">
                    <label htmlFor="dates">Data</label>
                    <input {...register('dates')} type="date" id="dates"/>
                </div>

                <div className="row">
                    <label htmlFor="startAge">Anni</label>
                    <div>
                        <input {...register('startAge')} type="number" id="startAge" name="startAge" min="0"
                               max="100" placeholder={"min"}/>
                        <input {...register('endAge')} type="number" id="endAge" name="endAge" min="0"
                               max="100" placeholder={"max"}/>
                    </div>
                </div>

                <div className="row">
                    <label htmlFor="placesAvailable">Posti disponibili</label>
                    <input {...register('placesAvailable')} type="number" id="placesAvailable"
                           name="placesAvailable" min="1" placeholder={"es. 10"}/>
                </div>

                <div className="row">
                    <label htmlFor="startTimetables">Orari</label>

                    <div>
                        <input {...register('startTimetables')} type="time" id="startTimetables"
                               name="startTimetables"/>
                        <input {...register('endTimetables')} type="time" id="endTimetables"
                               name="endTimetables"/>
                    </div>
                </div>

                <div className="row">
                    <label htmlFor="days">Giorni</label>

                    <select {...register('days')} name="days" id="days" multiple>
                        <option value="Lunedì">Lunedì</option>
                        <option value="Martedì">Martedì</option>
                        <option value="Mercoledì">Mercoledì</option>
                        <option value="Giovedì">Giovedì</option>
                        <option value="Venerdì">Venerdì</option>
                        <option value="Sabato">Sabato</option>
                        <option value="Domenica">Domenica</option>
                    </select>
                </div>

                <div className="row">
                    <label htmlFor="price">Prezzo</label>

                    <input {...register('price')} type="number" id="price" name="price" min="0"
                           placeholder={"es. 50"}/>
                </div>

                <div className="row">
                    <label htmlFor="detailedImages">Immagini dettagliate</label>

                    {/*<input {...register('detailedImages')} name={"detailedImages"} type="text"*/}
                    {/*       placeholder={"Detailed Images"}/>*/}

                    <input {...register('detailedImages')} name={"detailedImages"} type="file"
                           accept={'jpeg, .png, .jpg'} multiple
                           onChange={(e) => handleFileUpload(e)}
                    />
                </div>

                <div className="row">
                    <label htmlFor="detailedImages">Elementi del form</label>

                    <select {...register('formElementsList')} name="formElementsList" id="formElementsList"
                            multiple>
                        <option value="email">E-mail</option>
                        <option value="telefono">Telefono</option>
                        <option value="nomeBambino">Nome Bambino</option>
                        <option value="dataNascita">Data Nascita</option>
                        <option value="corsi">Corsi</option>
                        <option value="problematiche">Problematiche</option>
                        <option value="preferenze">Preferenze</option>
                        <option value="partecipazioneDiCoppia">Partecipazione Di Coppia</option>
                        <option value="presentazione">Presentazione</option>
                        <option value="aspettative">Aspettative</option>
                        <option value="note">Note</option>
                    </select>
                </div>

                <button type="submit">
                    {editCourseObj.id ? 'Modifica il corso' : 'Crea il corso'}
                </button>
            </form>
        </section>
    )
}

export default CoursesList