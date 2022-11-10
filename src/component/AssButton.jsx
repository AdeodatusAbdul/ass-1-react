import React from 'react'
import { Button } from '@mui/material'

const AssButton = (props) =>{



    const buttonStyle = {
        display: 'flex',
        flexWrap: 'wrap', 
        float: props.float,
        width: props.width,
        height: props.height,
        border: props.border,
        minWidth: props.minWidth,
        textTransform: 'capitalize',
        color: props.color || "#fff",
        borderColor: props.borderColor,
        backgroundColor: props.bgColor || '#26AAE1',
        margin: props.margin || '5px 10px',
        padding: props.padding || '4px 6px',
        borderRadius: `${props.borderRadius}px`,
        fontSize: props.fontSize || `14px`,
        '&:hover': {
            opacity: props.opacity || 0.8,
            // color: props.hoverColor || props.color,
            backgroundColor: props.bgHoverColor || '#26AAE1',
        },
        // '&:active': {
        //     padding: props.paddingActive || '3.5px 5.5px',
        //     borderRight: props.borderRightActive || '0.5px solid',
        //     borderBottom: props.borderBottomActive || '0.5px solid',
        // }
    }
    return (
        <Button 
            sx={buttonStyle} 
            type={props.type} 
            disabled={props.disabled}
            onClick={props.handleClick} 
            className={`${props.className} ${props.isResponsive && 'responsive'}`}
        >
            {props.icon}
            {props.text}
            {props.rightIcon}
        </Button>
    )
}

export default AssButton