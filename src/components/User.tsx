import React, { useState } from 'react'

interface UserInterface {
  uid: string
  name: string
}

export const User = () => {
  const [user, setUser] = useState<UserInterface>()

  const login = () => {
    setUser({
      uid: 'ere345eqd345',
      name: 'riskezwn'
    })
  }

  return (
    <div className="mt-2">
      <h4>User:</h4>
      <button onClick={login} className="btn btn-primary">
        Login
      </button>
      {
        (!user)
          ? <pre>There is no user</pre>
          : <pre>{JSON.stringify(user)}</pre>
      }
    </div>
  )
}
