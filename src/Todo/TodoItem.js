import React, {useContext, useState} from 'react'
import { TodoContext } from './Todo'

const TodoItem = ({item, index}) => {
    const todoContext = useContext(TodoContext);
    const [isUpdateMode, setIsUpdateMode] = useState(false)
    const [itemText, setItemText] = useState(item)
    const onItemTextChange = (e) => {
        setItemText(e.target.value)
    }
    return (
        <li>
            {!isUpdateMode ?
            <>
                <ItemText item={itemText} />
                <button onClick={() => todoContext.delete(index)}>Delete Item</button>
                <button onClick={() => setIsUpdateMode(true)}>Update Item</button>
            </>
            :
            <>
                <ItemInput item={item} onItemTextChange={onItemTextChange}/>
                <button onClick={() => {
                    setIsUpdateMode(false)
                    todoContext.update(index, itemText)
                }}>Confirm Update</button>
                <button onClick={() => setIsUpdateMode(false)}>Cancel Update</button>
            </>
            }
        </li>
    )
}

const ItemText = ({ item }) => (
    <span>{item}</span>
)

const ItemInput = ({ item, onItemTextChange }) => {
    return <input defaultValue={item} onChange={onItemTextChange}/>
}

export default TodoItem
