import React, {useState} from 'react'
import AddItem from './AddItem';
import TodoItem from './TodoItem';

const Todo = () => {
    const [list, setList] = useState([])
    const onAddClick = (item) => {
        console.log('onAddClick')
        setList([...list, item])
    }
    const onDeleteClick = (index) => {
        console.log('onDeleteClick', index)
        const updatedList = [...list]
        updatedList.splice(index, 1)
        setList(updatedList)
    }
    return (
        <>
            <AddItem onAddClick={onAddClick}/>
            <DisplayList list={list} onDeleteClick={onDeleteClick}/>
        </>
    )
}

const DisplayList = ({list, onDeleteClick}) => (
    <ul>
    {list.map((it,i) => (
        <TodoItem key={i} item={it} onDeleteClick={onDeleteClick} index={i}/>
    ))}
   </ul>
)

export default Todo
