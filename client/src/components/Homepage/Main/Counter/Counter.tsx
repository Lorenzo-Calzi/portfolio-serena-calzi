import React from "react";
import "./counter.scss";
import CountUp from "react-countup";
import Text from "../../../reusable/Text/Text";
import { motion } from "framer-motion";
import BasketBall from "../../../../assets/images/basket-ball.png";
import { useInView } from "react-intersection-observer";

const Counter = () => {
    const { ref, inView } = useInView({
        triggerOnce: true
    });

    return (
        <section id="counter">
            <div className="page-container">
                <div className="content" ref={ref}>
                    {inView ? (
                        <>
                            <motion.div
                                className="count"
                                initial={{ opacity: 0, y: -100 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0, duration: 1 }}
                                viewport={{ once: true, amount: 0 }}
                            >
                                <CountUp start={0} end={45} duration={3} />

                                <Text type={"h4"} textAlign={"center"}>
                                    Qualified Teachers
                                </Text>
                            </motion.div>

                            <motion.div
                                className="count"
                                initial={{ opacity: 0, y: -100 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0, duration: 1.25 }}
                                viewport={{ once: true, amount: 0 }}
                            >
                                <CountUp start={0} end={20} duration={3} />
                                <Text type={"h4"} textAlign={"center"}>
                                    Years Of Experience
                                </Text>
                            </motion.div>

                            <motion.div
                                className="count"
                                initial={{ opacity: 0, y: -100 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0, duration: 1.5 }}
                                viewport={{ once: true, amount: 0 }}
                            >
                                <CountUp start={0} end={565} duration={3} />
                                <Text type={"h4"} textAlign={"center"}>
                                    Students Enrolled
                                </Text>
                            </motion.div>

                            <motion.div
                                className="count"
                                initial={{ opacity: 0, y: -100 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0, duration: 1.75 }}
                                viewport={{ once: true, amount: 0 }}
                            >
                                <CountUp start={0} end={15} duration={3} />
                                <Text type={"h4"} textAlign={"center"}>
                                    Total Groups
                                </Text>
                            </motion.div>
                        </>
                    ) : (
                        <></>
                    )}
                </div>
                <img src={BasketBall} alt="Immagine di una palla da basket" />
            </div>
            <div className="counter-after" />
        </section>
    );
};

export default Counter;
