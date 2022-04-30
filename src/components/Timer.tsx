import React, { useEffect, useRef, useState } from 'react'

type TimerArgs = {
  milliseconds: number
}

export function Timer ({ milliseconds }: TimerArgs) {
  const [seconds, setSeconds] = useState(0)
  type NodeJS = NodeJS.Timer
  const ref = useRef<NodeJS>()

  useEffect(() => {
    ref.current && clearInterval(ref.current)
    ref.current = setInterval(() => setSeconds((s) => s + 1), milliseconds)
  }, [milliseconds])

  return (
    <h4>
      Timer:
      <small>{seconds}</small>
    </h4>
  )
}
