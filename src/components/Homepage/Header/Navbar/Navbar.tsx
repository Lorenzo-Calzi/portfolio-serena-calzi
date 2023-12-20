import React, {Dispatch, SetStateAction} from "react";
import './navbar.scss'
import Text from "../../../reusable/Text/Text"
import Anchor from "../../../reusable/Anchor/Anchor";
import Button from "../../../reusable/Button/Button";
import {motion} from "framer-motion";

interface NavbarProps {
    isVisibleSideBar: boolean;
    setIsVisibleSideBar: Dispatch<SetStateAction<boolean>>
}

const Navbar = ({isVisibleSideBar, setIsVisibleSideBar}: NavbarProps) => {
    const toggleSideBar = () => {
        if(!isVisibleSideBar) {
            setIsVisibleSideBar(true)
        } else {
            setIsVisibleSideBar(false)
        }
    }

    return (
        <section id="navbar">
            <div className="page-container">
                <div className="content">
                    <motion.div initial={{ opacity: 0, x: -40 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0, duration: 1}}
                                viewport={{ once: true, amount: 0 }}
                    >
                        <Text type={"h4"}>Dott.ssa Serena Calzi</Text>
                    </motion.div>

                    <motion.ul
                        initial={{ opacity: 0, y: -40}}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0, duration: 1}}
                        viewport={{ once: true, amount: 0 }}
                    >
                        <li><Anchor fontWeight={500} href={"#"}>Home</Anchor></li>
                        <li><Anchor fontWeight={500} href={"#services"}>Servizi</Anchor></li>
                        <li><Anchor fontWeight={500} href={"#about"}>About</Anchor></li>
                        <li><Anchor fontWeight={500} href={"#courses"}>Corsi</Anchor></li>
                        <li><Anchor fontWeight={500} href={"#steps"}>Progetti</Anchor></li>
                    </motion.ul>

                    <motion.div initial={{ opacity: 0, x: 40 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0, duration: 1}}
                                viewport={{ once: true, amount: 0 }}
                    >
                        <Button text={"Contattami"} className={"bookAVisitButton"} link={"#contact"}/>
                    </motion.div>

                    <motion.div className={"toggleSideBarButton"}
                                initial={{ opacity: 0, x: 40 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0, duration: 1}}
                                viewport={{ once: true, amount: 0 }}
                    >
                        <Button text={"Menu"} handler={toggleSideBar} />
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Navbar