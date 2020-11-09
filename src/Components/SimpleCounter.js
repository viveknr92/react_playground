import React, { useState, useCallback } from 'react'

const functionsCounter = new Set()

const SimpleCounter = (props) => {
    const [count1, setCount1] = useState(0)
    const [count2, setCount2] = useState(0)
    const plus = () => {
      setCount1(count1+1)
    }
    const minus = () => {
      setCount2(count2-1)
    }
    const pluscb = useCallback(() => setCount1(count1+1), [count1])
    const minuscb = useCallback(() => setCount2(count2-1), [count2])

    functionsCounter.add(pluscb)
    functionsCounter.add(minuscb)
    console.log(functionsCounter.size)
    return (
      <>
        <button onClick={() => pluscb()}>+</button>
        <div> {count1}</div>
        <button onClick={() => minuscb()}>-</button>
        <div> {count2}</div>
      </>
    )
}

export default SimpleCounter