import { useState } from "react"
import { Timer } from "./Timer"

export const TimerParent = () => {
  const [milliseconds, setMilliseconds] = useState(1000)

  return (
    <>
      <span>Milliseconds {milliseconds}</span>
      <br />
      <button onClick={() => setMilliseconds(1000)} className="btn btn-success">1000</button>
      <button onClick={() => setMilliseconds(2000)} className="btn btn-success">2000</button>
      <Timer milliseconds={milliseconds} />
    </>
  )
}