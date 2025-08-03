import React from 'react'
import { useState,useCallback,useEffect,useRef } from 'react'
import './App.css'

function App() {
 
  const [length,setLength]=useState(8)
  const [charAllowed,setCharAllowed]=useState(false)
  const [numberAllowed,setNumberAllowed]=useState(false)
  const [copied,setCopied]=useState(false)
  const [password,setPassword]=useState("")
 
  const passwordRef = useRef(null)

  const copyToClipboard= useCallback(()=>{
    passwordRef.current.select()
    window.navigator.clipboard.writeText(password)
    setCopied(true)
  },[password])

  const btnColorChar= charAllowed  ? 'bg-green-500 border-gray-600 bg-blue-800 p-2 m-2 rounded-lg' :'border '
  const btnColorNumber= numberAllowed ? 'bg-green-500 border-gray-600 bg-blue-800 p-2 m-2 rounded-lg' : 'border'

  const generaterPassword=useCallback(()=>{
    let pass=''
    let charSet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const numberSet = '0123456789'  
    const specialCharSet = '!@#$%^&*()_+[]{}|;:,.<>?'

    if(charAllowed) charSet += specialCharSet
    if (numberAllowed) charSet += numberSet 
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charSet.length)
      pass += charSet[randomIndex]
    }
    setPassword(pass)

    
  },[length,charAllowed,numberAllowed,setPassword])
  
  useEffect(()=>{
    generaterPassword()
  },[charAllowed,numberAllowed,length,setPassword]);



  return (
    <>
      <div className='w-screen h-screen bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center'>
        <div className='w-max  flex flex-col items-center justify-center  rounded-lg shadow-lg bg-gray-800 p-8 md:full h-max mb-4 relative'>
          <h1 className='text-4xl text-center text-white'>Password Generator</h1>
          <div className='mt-8 w-full flex items-center'>
            <input 
            type='text'
             className='w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 outline ' 
             value={password}
             ref={passwordRef}
              readOnly />
            <button 
            onClick={copyToClipboard}
            className={`m-2 w-40  text-white p-3 rounded-lg  transition duration-300 ${copied?'bg-green-500 hover:bg-yellow-700 ':'bg-blue-600 hover:bg-purple-700'} `}
            >
               {copied ? 'Copied!' : 'Copy Password'}
            </button>
          </div>
          <div className='w-full flex md:flex-row flex-col md:p-4 mt-4 items-center justify-between'>
            <div className='w-full  flex  items-center justify-between '>
              <input
              type='range'
              id='range' 
              value={length}
              onChange={(e)=>{setLength(e.target.value);setCopied(false)}}
              className='cursor-pointer'
              min={8}
              max={30}
              />
              <label htmlFor="range" className='text-grey-800 m-2 px-2 bg-white border rounded-lg p-3'>{length}</label>
            </div>
            <div className={`{'w-full  m-2 p-2 flex grow-1 items-center justify-center   rounded-lg
               ${btnColorChar}}'`}>
              <input
              type='checkbox'
              id='charAllowed'
              onClick={()=>{setCharAllowed((prev)=>!prev);setCopied(false)}}
              />
              <label htmlFor="charAllowed" className='w-full text-white m-2  px-1'>Character Allowed</label>
            </div>
            <div className={`w-full m-4 flex grow-0 items-center justify-center  rounded  md:p-4 md:m-4     ${btnColorNumber}`}>
              <input
              type='checkbox'
              id='numberAllowed'
              onClick={()=>{setNumberAllowed((prev)=>!prev);setCopied(false)}}
              />
              <label htmlFor="numberAllowed" className='text-white m-2  px-1'>Number Allowed</label>
            </div>
          </div>
        </div>
        <div className='absolute bottom-0 left-0 w-full text-center text-white p-4 md:hidden'>
          
          <textarea className='w-full h-40 bg-gray-700 m-2 p-2 rounded-lg'>
            </textarea>
          </div>
      </div>
    </>
  )
}

export default App
