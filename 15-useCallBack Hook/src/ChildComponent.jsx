import { React, memo } from 'react'

const ChildComponent = () => {
    console.log("Child Component...")
    return (
        <div>
            <h1>Child Component</h1>
        </div>
    )
}

export default memo(ChildComponent)
