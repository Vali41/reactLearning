import { useState } from 'react'
import './App.css'
import Button from './components/product'

function App(){
  const [color,setColor]=useState()
  const [btn,setBtn]=useState(true)

  const handlingColorChange=(newColor)=>{
    setColor(newColor)
    setBtn(false)
}
  

  const headinText= btn ? `You Can Change the Background Color Click any Button`:`You Changed background color ${color}`
  return (
    <>
      <div className={`min-h-screen flex flex-col item-center justify-center  text-center`} style={{ backgroundColor: color }}>
        <h1 className='text-4xl fond-bold mb-4 text-brown-800'>{headinText}</h1>
        <Button onColorSelect={handlingColorChange}  color={color}/>
      </div>
    </>
  )
}
export default App