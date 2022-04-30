import React from 'react'
import { useForm } from '../hooks/useForm'

interface FormData {
  email: string,
  name: string,
  age: number
}

export const Form = () => {
  const { name, email, age, handleInputChange, form } = useForm<FormData>({
    email: 'enrique@gmail.com',
    name: 'riskezwn',
    age: 35
  })

  return (
    <>
      <form autoComplete='off'>
        <div className="mb-3">
          <label htmlFor='email' className="form-label">Email:</label>
          <input type="email" className='form-control' name='email' onChange={handleInputChange} value={email}/>
        </div>
        <div className="mb-3">
          <label htmlFor='name' className="form-label">Name:</label>
          <input type="text" className='form-control' name='name' onChange={handleInputChange} value={name}/>
        </div>
        <div className="mb-3">
          <label htmlFor='age' className="form-label">Age:</label>
          <input type="number" className='form-control' name='age' onChange={handleInputChange} value={age}/>
        </div>
      </form>
      <pre>{JSON.stringify(form)}</pre>
    </>
  )
}
