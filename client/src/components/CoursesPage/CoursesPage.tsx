import React from "react";
import "./coursesPage.scss";
import Header from "../reusable/Header/Header";
import Breadcrumb from "../reusable/Breadcrumb/Breadcrumb";
import Footer from "../reusable/Footer/Footer";
import Course from "../Homepage/Main/Courses/Course/Course";
import CoursesSTUB from "../../stub/CoursesSTUB";

const CoursesPage = () => {
    return (
        <div id="courses-page">
            <Header components={<Breadcrumb title={"Corsi"} />} />

            <div className="page-container">
                <div className="courses">
                    {CoursesSTUB.map((course, index) => (
                        <Course
                            title={course.title}
                            description={course.description}
                            age={course.details.age}
                            time={course.details.timetables}
                            image={course.image}
                            price={course.details.price}
                            placesAvailable={course.details.placesAvailable}
                            slug={course.title.replace(/ /g, "-").toLowerCase()}
                            sale={course.sale}
                            key={index}
                        />
                    ))}
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default CoursesPage;
