import { useEffect, useState } from 'react'

function App() {

  const [count, setCount] = useState(0)
  useEffect(() => {
    return () => {}
  }, [])
  return (<>
    <h1>{count}</h1>
    <button onClick={() => setCount(state=>state + 1)}>Add</button>
    <button onClick={() => setCount(state=>state -1)}>Substract</button>

  </>)
}

export default App
