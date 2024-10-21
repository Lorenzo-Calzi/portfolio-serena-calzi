import React from "react";
import "./text.scss";
import CoursesSTUB from "../../../stub/CoursesSTUB";

interface TextProps {
    children: React.ReactNode;
    color?: string;
    type?: "h1" | "h2" | "h3" | "h4" | "p-big" | "p-medium" | "p-small" | "span";
    textAlign?: "left" | "center" | "right";
    fontWeight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
    oneLine?: boolean;
}

const Text = ({ children, type, color, textAlign, fontWeight, oneLine }: TextProps) => {
    switch (type) {
        case "h1":
            return (
                <h1
                    style={{
                        color: color ? color : "#103741",
                        textAlign: textAlign ? textAlign : "left",
                        fontWeight: fontWeight ? fontWeight : 700
                    }}
                    className={oneLine ? "one-line" : undefined}
                >
                    {children}
                </h1>
            );
        case "h2":
            return (
                <h2
                    style={{
                        color: color ? color : "#103741",
                        textAlign: textAlign ? textAlign : "left",
                        fontWeight: fontWeight ? fontWeight : 700
                    }}
                    className={oneLine ? "one-line" : undefined}
                >
                    {children}
                </h2>
            );
        case "h3":
            return (
                <h3
                    style={{
                        color: color ? color : "#103741",
                        textAlign: textAlign ? textAlign : "left",
                        fontWeight: fontWeight ? fontWeight : 700
                    }}
                    className={oneLine ? "one-line" : undefined}
                >
                    {children}
                </h3>
            );
        case "h4":
            return (
                <h4
                    style={{
                        color: color ? color : "#103741",
                        textAlign: textAlign ? textAlign : "left",
                        fontWeight: fontWeight ? fontWeight : 700
                    }}
                    className={oneLine ? "one-line" : undefined}
                >
                    {children}
                </h4>
            );
        case "span":
            return (
                <span
                    style={{
                        color: color ? color : "#103741",
                        textAlign: textAlign ? textAlign : "left",
                        fontWeight: fontWeight ? fontWeight : 500
                    }}
                    className={oneLine ? "one-line" : undefined}
                >
                    {children}
                </span>
            );
        case "p-big":
            return (
                <p
                    className="p-big"
                    style={{
                        color: color ? color : "#103741",
                        textAlign: textAlign ? textAlign : "left",
                        fontWeight: fontWeight ? fontWeight : 400
                    }}
                >
                    {children}
                </p>
            );
        case "p-medium":
            return (
                <p
                    className="p-medium"
                    style={{
                        color: color ? color : "#103741",
                        textAlign: textAlign ? textAlign : "left",
                        fontWeight: fontWeight ? fontWeight : 400
                    }}
                >
                    {children}
                </p>
            );
        case "p-small":
            return (
                <p
                    className="p-small"
                    style={{
                        color: color ? color : "#103741",
                        textAlign: textAlign ? textAlign : "left",
                        fontWeight: fontWeight ? fontWeight : 400
                    }}
                >
                    {children}
                </p>
            );
        default:
            return (
                <span
                    style={{
                        color: color ? color : "#103741",
                        textAlign: textAlign ? textAlign : "left",
                        fontWeight: fontWeight ? fontWeight : 500
                    }}
                >
                    {children}
                </span>
            );
    }
};

export default Text;
