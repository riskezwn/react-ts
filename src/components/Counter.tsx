import React, { useState } from 'react'

export const Counter = () => {
  const [counter, setCounter] = useState(0)
  const increment = (number: number = 1):void => {
    setCounter(counter + number)
  }

  return (
    <div className="mt-2">
      <h4>Counter:</h4>
      <span>Value: {counter}</span>
      <br />
      <button onClick={() => increment()} className="btn btn-primary mt-2 mr-2">
        +1
      </button>
      <button onClick={() => increment(2)} className="btn btn-primary mt-2 mr-2">
        +2
      </button>
      <button onClick={() => setCounter(0)} className="btn btn-danger mt-2 mr-2">
        Reset
      </button>
    </div>
  )
}
