import React from "react";
import './text.scss'

interface TextProps {
    children: any,
    color?: string
    type?: 'h1' | 'h2' | 'h3' | 'h4' | 'p-big' | 'p-small' | 'span'
}
const Text = ({children, type, color}: TextProps) => {

    switch(type) {
        case 'h1':
            return <h1 style={{color: color ? color : "#103741"}}>{children}</h1>
        case 'h2':
            return <h2 style={{color: color ? color : "#103741"}}>{children}</h2>
        case 'h3':
            return <h3 style={{color: color ? color : "#103741"}}>{children}</h3>
        case 'h4':
            return <h4 style={{color: color ? color : "#103741"}}>{children}</h4>
        case 'span':
            return <span style={{color: color ? color : "#103741"}}>{children}</span>
        case 'p-big':
            return <p className="p-big" style={{color: color ? color : "#103741"}}>{children}</p>
        case 'p-small':
            return <p className="p-small" style={{color: color ? color : "#103741"}}>{children}</p>
        default:
            return <span style={{color: color ? color : "#103741"}}>{children}</span>
    }
}

export default Text
