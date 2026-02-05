import reactLogo from './assets/react.svg'
import { useCallback, useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './Button.jsx'
import Display from './Display.jsx'

function App() {
  const buttonName = "Add 1";
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    console.log("Parent Rendered");
    setCount((count) => count + 1);
  }, []);
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <h2>{count}</h2>
      <div className="card">
        <Button onClick={increment} buttonName={buttonName} />
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div >
      <div className='card'>
        <Display />
      </div>
    </>
  )
}

export default App
