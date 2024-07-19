import React from "react";
import "./review.scss";
import Text from "../../../../reusable/Text/Text";
import { motion } from "framer-motion";
import ManIcon from "../../../../../assets/icons/man.svg";
import WomanIcon from "../../../../../assets/icons/woman.svg";

interface ReviewProps {
    title: string;
    description: string;
    name: string;
    gender: string;
}

const Review = ({ title, description, name, gender }: ReviewProps) => {
    return (
        <motion.div
            id="review"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0, duration: 1 }}
            viewport={{ once: true, amount: 0 }}
        >
            <div
                className="gender"
                style={{
                    backgroundColor: gender === "M" ? "#4949ff" : "#ff748c",
                    backgroundImage: `url(${gender === "M" ? ManIcon : WomanIcon})`
                }}
            />
            <Text type={"h4"} textAlign={"center"} oneLine>
                {title}
            </Text>
            <Text type={"p-medium"} textAlign={"center"}>
                {description}
            </Text>
            <Text type={"span"} textAlign={"center"}>
                {name}
            </Text>
        </motion.div>
    );
};

export default Review;
