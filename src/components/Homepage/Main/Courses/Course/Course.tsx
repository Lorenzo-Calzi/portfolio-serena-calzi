import React from "react";
import './course.scss'
import Text from '../../../../reusable/Text/Text'
import {motion} from "framer-motion";

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
        <motion.div id="course"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0, duration: 1}}
                    viewport={{ once: true, amount: 0 }}
        >
            <div className="top-content">
                <div className="image-container">
                    <div className="image" style={{ backgroundImage:`url(${image})` }} />
                </div>
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
        </motion.div>
    )
}

export default Course