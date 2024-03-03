import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if(typeof window?.MathJax !== "undefined"){
      window.MathJax.typesetClear()
      window.MathJax.typeset()
    }
  },[])
  return (
    <>
    {
    `
      $ \\int_1^2 f(x) dx$
    `
    }
    </>
  )
}

export default App
