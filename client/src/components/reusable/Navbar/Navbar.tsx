import React from "react";
import './navbar.scss'
import Text from "../Text/Text"
import Anchor from "../Anchor/Anchor";
import Button from "../Button/Button";
import {motion} from "framer-motion";
import {useDispatch} from "react-redux";
import {toggleSideBar} from "../../../redux/sideBarSlice";

interface NavbarProps {
    currentSlug: string
}

const Navbar = ({currentSlug}: NavbarProps) => {
    const dispatch = useDispatch()

    return (
        <section id="navbar">
            <div className="page-container">
                <div className="content">
                    <motion.div initial={{opacity: 0, x: -40}}
                                whileInView={{opacity: 1, x: 0}}
                                transition={{delay: 0, duration: 1}}
                                viewport={{once: true, amount: 0}}
                    >
                        <Text type={"h4"}>Dott.ssa Serena Calzi</Text>
                    </motion.div>

                    <motion.ul
                        initial={{opacity: 0, y: -40}}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{delay: 0, duration: 1}}
                        viewport={{once: true, amount: 0}}
                    >
                        <li className={currentSlug === "" ? "active" : ""}>
                            <Anchor fontWeight={500} href={"/"}>Home</Anchor></li>
                        <li className={currentSlug === "servizi" ? "active" : ""}>
                            <Anchor fontWeight={500} href={currentSlug ? "/servizi" : "#services"}>Servizi</Anchor>
                        </li>
                        <li className={currentSlug === "about" ? "active" : ""}>
                            <Anchor fontWeight={500} href={currentSlug ? "/about" : "#about"}>Chi Sono</Anchor>
                        </li>
                        <li className={currentSlug === "corsi" ? "active" : ""}>
                            <Anchor fontWeight={500} href={currentSlug ? "/corsi" : "#courses"}>Corsi</Anchor>
                        </li>
                        {/*<li className={currentSlug === "progetti" ? "active" : ""}>*/}
                        {/*    <Anchor fontWeight={500} href={currentSlug ? "/progetti" : "#steps"}>Progetti</Anchor>*/}
                        {/*</li>*/}
                        <li>
                            <Anchor fontWeight={500}>Recensioni</Anchor>
                        </li>
                    </motion.ul>

                    <motion.div initial={{opacity: 0, x: 40}}
                                whileInView={{opacity: 1, x: 0}}
                                transition={{delay: 0, duration: 1}}
                                viewport={{once: true, amount: 0}}
                    >
                        <Button text={"Contattami"} className={"bookAVisitButton"}
                                link={currentSlug ? "/#contact" : "#contact"}/>
                    </motion.div>

                    <motion.div className={"toggleSideBarButton"}
                                initial={{opacity: 0, x: 40}}
                                whileInView={{opacity: 1, x: 0}}
                                transition={{delay: 0, duration: 1}}
                                viewport={{once: true, amount: 0}}
                    >
                        <Button text={"Menu"} handler={() => dispatch(toggleSideBar())}/>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Navbar