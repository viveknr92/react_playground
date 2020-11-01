import React from 'react'
import { withRouter } from 'react-router'
import Counter from './Counter'
const Child = () => {
    return (
        <div>
            This is the child
            <Counter />
        </div>
        
    )
}

export default withRouter(Child)