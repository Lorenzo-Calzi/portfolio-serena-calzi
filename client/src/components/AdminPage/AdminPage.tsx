import React, {useEffect, useState} from 'react';
import "./adminPage.scss"
import "../reusable/Text/Text"
import Header from "./Header/Header";
import CustomersList, {CustomerProps} from "./CustomersList/CustomersList";
import CoursesList, {CourseProps} from "./CoursesList/CoursesList";
import axios from "axios";
import Text from "../reusable/Text/Text";

const client = axios.create({
    baseURL: "/api"
});

const AdminPage = () => {
    const [customers, setCustomers] = useState([])
    const [courses, setCourses] = useState([])
    const [selector, setSelector] = useState('courses')
    const [selectedEvent, setSelectedEvent] = useState("")

    useEffect(() => {
        getAllCustomers()
        getAllCourses()
    }, [])

    const getAllCustomers = async () => {
        const response = await client.get("/customers");
        setCustomers(response.data)
    }

    const getAllCourses = async () => {
        const response = await client.get("/courses");
        setCourses(response.data)
    }

    return (
        <div id="admin-page">
            <Header selector={selector} setSelector={setSelector}/>

            <div className="page-container">
                <div className="content">
                    {!selector && <Text type={"h4"}>Seleziona una categoria</Text>}

                    {
                        selector === 'customers' && (
                            <div className="filter">
                                <select name="" id="" onChange={(e) => setSelectedEvent(e.target.value)}>
                                    <option value="">Seleziona un corso</option>

                                    {
                                        courses && courses.map((course: CourseProps, index: number) => (
                                            <option value={course.title} key={index}>{course.title}</option>
                                        ))
                                    }
                                </select>

                                <Text type={"p-big"} textAlign={"center"}>
                                    TOT:
                                    {customers && customers.filter((customer: CustomerProps) => selectedEvent ? customer.corso === selectedEvent : customer).length}
                                    {(selectedEvent && courses) && `/${courses.filter((course: CourseProps) => course.title === selectedEvent).map((course: CourseProps, index: number) => course.details.placesAvailable)}`}
                                </Text>
                            </div>
                        )
                    }

                    {
                        selector === "customers" && (
                            <CustomersList customers={customers} setCustomers={setCustomers} courses={courses}
                                           client={client}
                                           selectedEvent={selectedEvent}/>
                        )
                    }

                    {
                        selector === "courses" && (
                            <CoursesList courses={courses} setCourses={setCourses} client={client}
                                         selectedEvent={selectedEvent}/>
                        )
                    }
                </div>

            </div>
        </div>
    )
}

export default AdminPage