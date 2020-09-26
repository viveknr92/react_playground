import React from 'react'

const TodoItem = ({item, onDeleteClick, index}) => {
    return (
        <li>
            <span>{item}</span>
            <button onClick={() => onDeleteClick(index)}>delete</button>
        </li>
    )
}

export default TodoItem
