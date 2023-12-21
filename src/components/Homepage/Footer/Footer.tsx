import React from "react";
import "./footer.scss"
import Text from "../../reusable/Text/Text";

const Footer = () => {
    return (
        <footer id="footer">
            <div className="page-container">
                <Text type={"p-small"}
                      textAlign={"center"}
                      color={"#888888FF"}>
                    Copyright 2023 By Serena Calzi | All Right Reserved.
                </Text>
            </div>
        </footer>
    )
}

export default Footer