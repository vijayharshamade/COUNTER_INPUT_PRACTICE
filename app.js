import { useState } from 'react'
const App = () => {
  const [name, setName] = useState("")
  const [count, setCount] = useState(0)
  const onChangeName = (event) => {
    setName(event.target.value)
  }
  const onDecrement = () => {
    setCount((prevState) => prevState - 1
    )
  }
  const onIncrement = () => {
    setCount((prevState) => prevState + 1
    )
  }
  return (
    <>
      <h1>App</h1>
      <input value={name} type="text" onChange={onChangeName} />
      <h1>{name}</h1>
      <p>{count}</p>
      <button onClick={onDecrement}>-</button>
      <button onClick={onIncrement}>+</button>
    </>
  )
}

export default App
