import React from "react";
import "./steps.scss"
import Step from "./Step/Step";
import {motion} from "framer-motion";
import StepsSTUB from "../../../stub/StepsSTUB";
import Arrow from "../../../assets/images/arrow-curve.png"
import CloudTopRight from "../../../assets/images/cloud-1.png"
import CloudBottomLeft from "../../../assets/images/cloud-2.png"

const Steps = () => {
    return (
        <section id="steps">
            <img src={CloudTopRight} className="cloud-top-right" alt="Immagini a forma di nuvola"/>
            <div className="page-container">
                <div className="content">
                    <Step image={StepsSTUB[0].image} title={StepsSTUB[0].title} description={StepsSTUB[0].description} index={1}/>
                    <motion.img src={Arrow} alt="Immagine di una freccia curva"
                                className="steps-arrow"
                                initial={{ opacity: 0, y: -50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0, duration: 1}}
                                viewport={{ once: true, amount: 0 }}
                    />
                    <Step image={StepsSTUB[1].image} title={StepsSTUB[1].title} description={StepsSTUB[1].description} index={2}/>
                    <motion.img src={Arrow} alt="Immagine di una freccia curva"
                                className="steps-arrow"
                                 initial={{ opacity: 0, y: -50 }}
                                 whileInView={{ opacity: 1, y: 0 }}
                                 transition={{ delay: 0, duration: 1}}
                                 viewport={{ once: true, amount: 0 }}
                    />
                    <Step image={StepsSTUB[2].image} title={StepsSTUB[2].title} description={StepsSTUB[2].description} index={3}/>
                </div>
            </div>
            <img src={CloudBottomLeft} className="cloud-bottom-left" alt="Immagini a forma di nuvola"/>
        </section>
    )
}

export default Steps
