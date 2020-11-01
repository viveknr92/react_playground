import React, { useState } from 'react'

const SimpleCounter = (props) => {
    const [count, setCount] = useState(0)
    const plus = () => {
      setCount(count+1);
    }
    const minus = () => {
      setCount(count-1);
    }
    return (
      <>
        <button onClick={() => plus()}>+</button>
        <div> {count}</div>
        <button onClick={() => minus()}>-</button>
      </>
    )
}

export default SimpleCounter