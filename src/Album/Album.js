import React, { useState, useEffect } from 'react'

export const Album = () => {
    const [album, setAlbum] = useState([])
    useEffect(() => {
      const fetchData = async () => {
        const url = 'https://jsonplaceholder.typicode.com/albums'
        const d = await fetch(url)
        const data = await d.json()
        setAlbum(data)
      }
      fetchData()
    }, [])
    const filterResult = (value) => {
      console.log('value', value)
      const arr = album.filter((a) => {
        return a.title.includes(value) //includes, match
      })
      setAlbum(arr)
    } 
    return (
      <>
        <SearchBar filterResult={filterResult} />
        <div className='ui grid'>
          {album.map((item) => <div className='four wide column'>{item.title}</div>)}
        </div>
      </>
    )
  }
  
  const SearchBar = ({ filterResult }) => {
    const [value, setValue] = useState('')
    const onTextChange = (e) => {
      setValue(e.target.value)
    }
    const onTextSubmit = () => {
      filterResult(value)
    } 
    return (
      <>
        <input value={value} onChange={(e) => onTextChange(e)}/>
        <button onClick={() => onTextSubmit()} >Fetch Data</button>
      </>
    )
  }