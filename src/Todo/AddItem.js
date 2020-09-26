import React, {useEffect, useRef, useState} from 'react'

const AddItem = ({onAddClick}) => {
    const [text, setText] = useState("")
    const inputEl = useRef(null)
    const onTextChange = (e) => {
        setText(e.target.value)
    }
    useEffect(() => {
        inputEl.current.focus();
    }, [])
    return (
        <form onSubmit={(e) => {
            e.preventDefault()
            e.target.reset()
            console.log('form submit event', e)
            onAddClick(text)
        }}>
            <input onChange={onTextChange} ref={inputEl}/>
            <input type="submit" value="Add Item Button"/>
        </form>
    )
}

export default AddItem