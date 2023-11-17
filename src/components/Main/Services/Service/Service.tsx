import React from "react";
import './service.scss'
import Text from "../../../reusable/Text/Text"
import {motion} from "framer-motion";

interface ServiceProps {
    image: string,
    title: string,
    description: string,
    backgroundColor: string,
    textColor: string
}

const Service = ({image, title, description, backgroundColor, textColor}: ServiceProps) => {
    return (
        <motion.div id="service" style={{backgroundColor: backgroundColor}}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0, duration: 1}}
                    viewport={{ once: true, amount: 0 }}
        >
            <img src={image} alt={`${title} icon`}/>
            <Text type={"h4"} textAlign={"center"} color={textColor}>{title}</Text>
            <Text type={"p-small"} textAlign={"center"} color={textColor}>
                {description}
            </Text>
        </motion.div>
    )
}

export default Service