import React from "react";
import "./course.scss";
import Text from "../../../../reusable/Text/Text";
import { motion } from "framer-motion";
import Button from "../../../../reusable/Button/Button";
import SaleSVG from "../../../../../assets/icons/sale.svg";

interface CourseProps {
    title: string;
    description: string;
    age: string;
    time: string;
    image: string;
    price: string;
    placesAvailable: string;
    slug: string;
    sale: boolean;
}

const Course = ({
    title,
    description,
    age,
    time,
    image,
    placesAvailable,
    slug,
    sale
}: CourseProps) => {
    return (
        <motion.div
            id="course"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0, duration: 1 }}
            viewport={{ once: true, amount: 0 }}
        >
            <div className="top-content">
                <div className="image-container">
                    <div className="image" style={{ backgroundImage: `url(${image})` }} />
                </div>
                {sale && <img src={SaleSVG} alt="icona dello sconto" className="sale" />}
            </div>

            <div className="void-space-transaparent" />
            <div className="void-space" />
            <div className="course-content">
                <Text type={"h4"} color={"#FE5D37FF"}>
                    {title}
                </Text>
                <Text type={"p-big"}>{description}</Text>
                <div className="infos">
                    <div className="info">
                        <Text type={"p-big"} oneLine fontWeight={500}>
                            Età:
                        </Text>
                        <Text type={"p-medium"} color={"#FE5D37FF"} fontWeight={500}>
                            {age}
                        </Text>
                    </div>
                    <div className="separator" />
                    <div className="info">
                        <Text type={"p-big"} oneLine fontWeight={500}>
                            Orario:
                        </Text>
                        <Text type={"p-medium"} color={"#FE5D37FF"} fontWeight={500}>
                            {time}
                        </Text>
                    </div>
                    <div className="separator" />
                    <div className="info">
                        <Text type={"p-big"} oneLine fontWeight={500}>
                            Posti:
                        </Text>
                        <Text type={"p-medium"} color={"#FE5D37FF"} fontWeight={500}>
                            {placesAvailable}
                        </Text>
                    </div>
                </div>
                <Button text={"Dettagli"} link={`/corsi/${slug}`} />
            </div>
        </motion.div>
    );
};

export default Course;
