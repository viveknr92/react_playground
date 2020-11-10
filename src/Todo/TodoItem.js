import React, {useContext, useState} from 'react'
import { TodoContext } from './Todo'

const TodoItem = ({item, index}) => {
    const todoContext = useContext(TodoContext)
    const [isUpdateMode, setIsUpdateMode] = useState(false)
    const onUpdate = (text) => {
        todoContext.update(index, text)
        setIsUpdateMode(false)
    }
    const onCancel = () => {
        setIsUpdateMode(false)
    }
    const onDelete = () => {
        todoContext.delete(index)
    }
    return (
        <li>
            {!isUpdateMode ? 
            <ViewMode item={item}
                        onDelete={onDelete}
                        setIsUpdateMode={setIsUpdateMode}
            /> : 
            <UpdateMode item={item}
                        onCancel={onCancel}
                        onUpdate={onUpdate}
            />}
        </li>
    )
}

const UpdateMode = ({ item, onCancel, onUpdate}) => {
    const [itemText, setItemText] = useState(item)
    const onChange = (e) => {
        setItemText(e.target.value)
    }
    return (
        <>
            <input value={itemText} onChange={onChange}/>
            <button onClick={() => onUpdate(itemText)}>Confirm Update</button>
            <button onClick={() => onCancel()}>Cancel Update</button>
        </>
    )
}

const ViewMode = ({item, setIsUpdateMode, onDelete}) => {
    return (
        <>
            <ItemText item={item} />
            <button onClick={() => onDelete()}>Delete Item</button>
            <button onClick={() => setIsUpdateMode(true)}>Update Item</button>
        </>
    )
}

const ItemText = ({ item }) => (
    <span>{item}</span>
)

export default TodoItem
