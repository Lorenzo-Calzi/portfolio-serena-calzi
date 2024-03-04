import React from 'react';
import "./header.scss"
import Text from "../../reusable/Text/Text";

type HeaderProps = {
    selector: string,
    setSelector: (selector: string) => void
}

const Header = ({selector, setSelector}: HeaderProps) => {
    return (
        <header className="header">
            <div className="page-container">
                <div className="content">
                    <Text type={"h2"}>Benvenuta Serena</Text>

                    <div className="selectors">
                        <button className={selector === "customers" ? "active" : ""}
                                onClick={() => setSelector("customers")}>Utenti
                        </button>
                        <button className={selector === "courses" ? "active" : ""}
                                onClick={() => setSelector("courses")}>Corsi
                        </button>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header