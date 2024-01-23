import React from 'react';
import "./header.scss"
import Text from "../../reusable/Text/Text";

const Header = () => {
    return (
        <header className="header">
            <div className="page-container">
                <div className="content">
                    <div className="header">
                        <Text type={"h2"}>Benvenuta Serena</Text>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header