import React, {useState} from 'react'
import AddItem from './AddItem';
import TodoItem from './TodoItem';

export const TodoContext = React.createContext()

const Todo = () => {
    const [list, setList] = useState([])
    const onAddClick = (item) => {
        setList([...list, item])
    }
    const onDeleteClick = (index) => {
        const updatedList = [...list]
        updatedList.splice(index, 1)
        setList(updatedList)
    }
    const onUpdate = (index, value) => {
        const updatedList = [...list]
        updatedList[index] = value
        setList(updatedList)
    }
    return (
        <TodoContext.Provider value={{delete: onDeleteClick, update: onUpdate}}>
            <AddItem onAddClick={onAddClick}/>
            <DisplayList list={list}/>
        </TodoContext.Provider>
    )
}

const DisplayList = ({list}) => (
    <ul>
    {list.map((item,i) => (
        <TodoItem key={i} item={item} index={i}/>
    ))}
   </ul>
)

export default Todo
