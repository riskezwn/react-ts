import React from 'react'
import { useForm } from '../hooks/useForm'

interface FormData {
  zipCode: number,
  city: string
}

export const FormAddress = () => {
  const { form, handleInputChange } = useForm<FormData>({
    zipCode: 47420,
    city: 'Valladolid'
  })
  const { zipCode, city } = form
  return (
    <>
      <form autoComplete='off'>
        <div className="mb-3">
          <label htmlFor='zipCode' className="form-label">Zip Code:</label>
          <input type="number" className='form-control' name='zipCode' onChange={handleInputChange} value={zipCode}/>
        </div>
        <div className="mb-3">
          <label htmlFor='city' className="form-label">City:</label>
          <input type="text" className='form-control' name='city' onChange={handleInputChange} value={city}/>
        </div>
      </form>
      <pre>{JSON.stringify(form)}</pre>
    </>
  )
}
