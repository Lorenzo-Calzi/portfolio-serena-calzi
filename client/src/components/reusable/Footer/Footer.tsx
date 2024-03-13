import React from "react";
import "./footer.scss"
import Text from "../Text/Text";
import moment from "moment";

const Footer = () => {
    return (
        <footer id="footer">
            <div className="page-container">
                <Text type={"p-medium"}
                      textAlign={"center"}
                      color={"#888888FF"}
                >
                    Copyright © {moment().year()} By <a href="https://portfolio-lorenzo-calzi.vercel.app/"
                                                        target="_blank">Lorenzo
                    Calzi</a> | All
                    Right Reserved.
                </Text>
            </div>
        </footer>
    )
}

export default Footer