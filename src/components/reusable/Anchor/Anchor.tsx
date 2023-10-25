import React from "react";
import './anchor.scss'
import Text from '../Text/Text'

interface AnchorProps {
    href?: string;
    target?: boolean;
    fontWeight?: number;
    children: React.ReactNode;
}
const Anchor = ({href, target, fontWeight, children}: AnchorProps) => {

    return (
        <a href={href && href} target={target ? "_blank" : ''} className="custom-anchor" style={{fontWeight: fontWeight ? fontWeight : 400}}>
            <Text type={'p-big'}>{children}</Text>
        </a>
    )
}

export default Anchor