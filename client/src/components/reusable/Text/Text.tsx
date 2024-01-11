import React from "react";
import './text.scss'

interface TextProps {
    children: React.ReactNode,
    color?: string
    type?: 'h1' | 'h2' | 'h3' | 'h4' | 'p-big' | 'p-small' | 'span'
    textAlign?: 'left' | 'center' | 'right'
}
const Text = ({children, type, color, textAlign}: TextProps) => {

    switch(type) {
        case 'h1':
            return <h1 style={{color: color ? color : "#103741", textAlign: textAlign ? textAlign : 'left'}}>{children}</h1>
        case 'h2':
            return <h2 style={{color: color ? color : "#103741", textAlign: textAlign ? textAlign : 'left'}}>{children}</h2>
        case 'h3':
            return <h3 style={{color: color ? color : "#103741", textAlign: textAlign ? textAlign : 'left'}}>{children}</h3>
        case 'h4':
            return <h4 style={{color: color ? color : "#103741", textAlign: textAlign ? textAlign : 'left'}}>{children}</h4>
        case 'span':
            return <span style={{color: color ? color : "#103741", textAlign: textAlign ? textAlign : 'left'}}>{children}</span>
        case 'p-big':
            return <p className="p-big" style={{color: color ? color : "#103741", textAlign: textAlign ? textAlign : 'left'}}>{children}</p>
        case 'p-small':
            return <p className="p-small" style={{color: color ? color : "#103741", textAlign: textAlign ? textAlign : 'left'}}>{children}</p>
        default:
            return <span style={{color: color ? color : "#103741", textAlign: textAlign ? textAlign : 'left'}}>{children}</span>
    }
}

export default Text
