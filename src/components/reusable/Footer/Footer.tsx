import React from "react";
import "./footer.scss"
import Text from "../Text/Text";

const Footer = () => {
    return (
        <footer id="footer">
            <div className="page-container">
                <Text type={"p-small"}
                      textAlign={"center"}
                      color={"#888888FF"}
                >
                    Copyright © 2023 By <a href="https://portfolio-lorenzo-calzi.vercel.app/" target="_blank">Lorenzo
                    Calzi</a> | All
                    Right Reserved.
                </Text>
            </div>
        </footer>
    )
}

export default Footer