import React from 'react'
import { Link } from 'react-router-dom'

const Child = () => {
    return (
        <div>
            <div>This is another child</div>
            <Link to="/child">Link to Child</Link>
        </div>
    )
}

export default Child