import React, {useEffect, useRef, useState} from 'react'

const AddItem = ({onAddClick}) => {
    const [text, setText] = useState("")
    const inputEl = useRef(null)
    const onTextChange = (e) => {
        setText(e.target.value)
    }
    useEffect(() => {
        inputEl.current.focus();
    }, [onAddClick])
    return (
        <form onSubmit={(e) => {
            e.preventDefault()
            onAddClick(text)
            setText('')
        }}>
            <input value={text} onChange={onTextChange} ref={inputEl} placeholder='Add Item'/>
            <input type="submit" value="Add Item Button" disabled={!text}/>
        </form>
    )
}

export default AddItem