import React from "react";
import './jumbotron.scss'
import {motion} from "framer-motion";
import LeftLineImg from '../../../assets/images/hero-left-white-line.png'
import RightLineImg from '../../../assets/images/hero-right-white-line.png'

const Navbar = () => {
    return (
        <section id="jumbotron">
            <div className="header-after" />
            <div className="content">
                <motion.div className="bubble"
                            initial={{ opacity: 0, scale: 0.7 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0, duration: 1}}
                            viewport={{ once: true, amount: 0 }}
                >
                    <motion.img
                        src={LeftLineImg} className="left-line-img" alt="Immagine di una riga bianca"
                        initial={{ opacity: 0, y: -100, x: -100 }}
                        whileInView={{ opacity: 1, y: 0, x: 0 }}
                        transition={{ delay: 0, duration: 1}}
                        viewport={{ once: true, amount: 0 }}
                    />

                    <motion.img initial={{ opacity: 0, y: -100, x: 100 }}
                                whileInView={{ opacity: 1, y: 0, x: 0 }}
                                transition={{ delay: 0, duration: 1}}
                                viewport={{ once: true, amount: 0 }}
                                src={RightLineImg} className="right-line-img" alt="Immagine di una riga bianca"
                    />

                    {/*<motion.img initial={{ opacity: 0, y: -100, x: 100 }}*/}
                    {/*            whileInView={{ opacity: 1, y: 0, x: 0 }}*/}
                    {/*            transition={{ delay: 0, duration: 1}}*/}
                    {/*            viewport={{ once: true, amount: 0 }}*/}
                    {/*            src={CarImg} className="car-img" alt="Immagine di una macchina blu"*/}
                    {/*/>*/}
                </motion.div>
            </div>
            <div className="hero-after" />
        </section>
    )
}

export default Navbar