import React from 'react'
import "./App.css"

export default function App() {

  const[dots, setDots] = React.useState([])
  const [und, setUnd] = React.useState([])

  const handleClick = e => {
    setDots([
      ...dots,
      {
        x : e.clientX,
        y : e.clientY
      }
    ])
    setUnd([])
  }

  const handleUndo = e => {
    e.stopPropagation()
    const data = [...dots]
    const item = data.pop()
    setUnd(data => [...und, item])
    setDots(data)
    console.log(und)
  }

  const handleRedo = e => {
    e.stopPropagation()
    const data = [...und]
    const item = data.pop()
    setUnd(data)
    setDots(dots => [...dots, item])
  }

  return (
    <div className='App' onClick={handleClick}>
      <div className='butHolder'>
        <button className='but' disabled={dots.length === 0} onClick={handleUndo}>UNDO</button>
        <button className='but' disabled={und.length === 0} onClick={handleRedo}>REDO</button>
      </div>
      {dots.map(dot => {
        return <div className='dot' style={{left:dot.x , top:dot.y}}></div>
      })}
    </div>
  )
}
