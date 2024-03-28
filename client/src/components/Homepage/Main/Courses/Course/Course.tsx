import React from "react";
import './course.scss'
import Text from '../../../../reusable/Text/Text'
import {motion} from "framer-motion";
import Button from "../../../../reusable/Button/Button";

interface CourseProps {
    title: string,
    description: string,
    age: string,
    time: string,
    image: string,
    price: string
    placesAvailable: string,
    slug: string
}

const Course = ({title, description, age, time, image, price, placesAvailable, slug}: CourseProps) => {
    return (
        <motion.a id="course"
                  href={`/corsi/${slug}`}
                  initial={{opacity: 0, scale: 0.8}}
                  whileInView={{opacity: 1, scale: 1}}
                  transition={{delay: 0, duration: 1}}
                  viewport={{once: true, amount: 0}}
        >
            <div className="top-content">
                <div className="image-container">
                    <div className="image" style={{backgroundImage: `url(${image})`}}/>
                </div>
                <div className="price">
                    <Text type={"h4"} color={"white"}>{price}</Text>
                </div>
            </div>

            <div className="void-space-transaparent"/>
            <div className="void-space"/>
            <div className="course-content">
                <Text type={"h4"} color={"#FE5D37FF"}>{title}</Text>
                <Text type={"p-big"}>{description}</Text>
                <div className="infos">
                    <div className="info">
                        <Text type={"p-big"} oneLine fontWeight={500}>Età:</Text>
                        <Text type={"p-medium"} color={"#FE5D37FF"} fontWeight={500}>{age}</Text>
                    </div>
                    <div className="separator"/>
                    <div className="info">
                        <Text type={"p-big"} oneLine fontWeight={500}>Orario:</Text>
                        <Text type={"p-medium"} color={"#FE5D37FF"} fontWeight={500}>{time}</Text>
                    </div>
                    <div className="separator"/>
                    <div className="info">
                        <Text type={"p-big"} oneLine fontWeight={500}>Posti:</Text>
                        <Text type={"p-medium"} color={"#FE5D37FF"} fontWeight={500}>{placesAvailable}</Text>
                    </div>
                </div>
                <Button text={"Dettagli"} link={`/corsi/${slug}`}/>
            </div>
        </motion.a>
    )
}

export default Course