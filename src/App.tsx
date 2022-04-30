import React from 'react'
import { Counter } from './components/Counter'
import { User } from './components/User'

import { TimerParent } from './components/TimerParent'
import { CounterReducer } from './components/CounterRed'
import { Form } from './components/Form'
import { FormAddress } from './components/FormAddress'

function App () {
  return (
    <>
      <h1>React + Typescript</h1>
      <hr />
      <h2>useState</h2>
        <Counter />
        <User />
      <hr />
      <h2>useEffect - useRef</h2>
        <TimerParent />
      <hr />
      <h2>useReducer</h2>
      <CounterReducer />
      <hr />
      <h2>customHooks</h2>
      <Form />
      <br />
      <FormAddress />
    </>
  )
}

export default App
