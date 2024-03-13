import React from "react";
import "./step.scss"
import Text from "../../../../reusable/Text/Text"
import {motion} from "framer-motion";

interface StepProps {
    image: string,
    title: string,
    description: string
    index: number
    slug: string
}

const Step = ({image, title, description, index, slug}: StepProps) => {
    return (
        <motion.a id="step"
                  href={`progetti/${slug}`}
                  initial={{opacity: 0, y: -50}}
                  whileInView={{opacity: 1, y: 0}}
                  transition={{delay: 0, duration: 1}}
                  viewport={{once: true, amount: 0}}
        >
            <div className="top">
                <div className="icon" style={{backgroundImage: `url(${image})`}}/>
                <Text type={'h4'}>{title}</Text>
            </div>
            <div className="bottom">
                <Text type={"p-medium"} textAlign={"center"}>{description}</Text>
            </div>
            <div className="number">
                <Text type={'h4'} color={'#fe5d37'}>0{index}</Text>
            </div>
        </motion.a>
    )
}

export default Step