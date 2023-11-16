import React from "react";
import './course.scss'
import Text from '../../../reusable/Text/Text'

interface CourseProps {
    title: string,
    description: string,
    age: string,
    time: string,
    image: string,
    price: string
}

const Course = ({title, description, age, time, image, price}: CourseProps) => {
    return (
        <div id="course">
            <div className="image" style={{backgroundImage: ""}}>
                <div className="price">
                    <Text type={"h4"} color={"white"}>{price}</Text>
                </div>
            </div>
            <div className="void-space-transaparent" />
            <div className="void-space" />
            <div className="course-content">
                <Text type={"h4"} color={"#FE5D37FF"}>{title}</Text>
                <Text type={"p-big"}>{description}</Text>
                <div className="infos">
                    <div className="info">
                        <Text type={"span"}>Età:</Text>
                        <Text type={"p-small"} color={"#FE5D37FF"}>{age}</Text>
                    </div>
                    <div className="separator" />
                    <div className="info">
                        <Text type={"span"}>Orario:</Text>
                        <Text type={"p-small"} color={"#FE5D37FF"}>{time}</Text>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Course