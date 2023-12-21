import React from "react";
import "./breadcrumb.scss"
import Text from "../Text/Text"

interface BreadcrumbProps {
    title: string
}

const Breadcrumb = ({title}: BreadcrumbProps) => {

    return (
        <div id="breadcrumb">
            <Text type={"h1"} color={"white"} textAlign={"center"}>{title}</Text>
        </div>
    )
}

export default Breadcrumb