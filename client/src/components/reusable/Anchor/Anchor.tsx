import React from "react";
import "./anchor.scss";
import Text from "../Text/Text";

interface AnchorProps {
    href?: string;
    target?: boolean;
    fontWeight?: number;
    children?: React.ReactNode;
    small?: boolean;
    color?: string;
}

const Anchor = ({ href, target, fontWeight, children, small, color }: AnchorProps) => {
    return (
        <a
            href={href && href}
            target={target ? "_blank" : ""}
            className="custom-anchor"
            style={{ fontWeight: fontWeight ? fontWeight : 400 }}
        >
            {children && (
                <Text type={small ? "p-medium" : "p-big"} color={color ? color : "#103741"}>
                    {children}
                </Text>
            )}
        </a>
    );
};

export default Anchor;
