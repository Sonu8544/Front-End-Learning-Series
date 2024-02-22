import React from 'react'

export default function Button({style, children, ...rest }) {
    return (
        <div>
            <button  style={style ? style : {color: 'red'}}  {...rest}> {children} </button>
        </div>
    )
}
