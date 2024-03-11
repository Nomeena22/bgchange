import { useState } from 'react'
import './App.css'

function App() {
  const [color ,setColor] = useState("yellow")



  return (
    <>
      <div className='container' style={{backgroundColor : color}}>
        <h3>BgChanger</h3>
        <div className=' row'>
         
          <button onClick={() => setColor ("red")} style={{backgroundColor : "red"}}>Red</button>
          <button onClick={() => setColor ("green")} style={{backgroundColor : "green"}}>Green</button>
          <button onClick={() => setColor ("blue")} style={{backgroundColor : "blue"}}>Blue</button>
          <button onClick={() => setColor ("orange")} style={{backgroundColor : "orange"}}>Orange</button>
          <button onClick={() => setColor ("grey")} style={{backgroundColor : "grey"}}>Grey</button>
          <button onClick={() => setColor ("yellow")} style={{backgroundColor : "yellow"}}>Yellow</button>
          <button onClick={() => setColor ("brown")} style={{backgroundColor : "brown"}}>Brown</button>
          <button onClick={() => setColor ("black")} style={{backgroundColor : "black"}}>Black</button>
          <button onClick={() => setColor ("white")} style={{backgroundColor : "white", color : 'black'}}>White</button>

          


        </div>
        
     
      </div>
    </>
  )
}

export default App
