import { useState } from 'react'

import InputBox from './components/InputBox.jsx'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat' style={{ backgroundImage: `url(${viteLogo})` }}>
        <div className='w-full'>
          <div className='w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30'>
           <form onSubmit={(e)=>{
            e.preventDefault()
           }}>
            <div className='w-full mb-1'>
              <InputBox lable="From"/>
            </div>
            <div className='relative w-full h-0'>
              <button 
               type='button'
               className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2
               border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
              >
                swap
              </button>
            </div>
            <div className='w-full mb-1'>
              <InputBox lable="To"/>
            </div>
            <button 
            type='submit'
            className='w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300'>
              Convert Currency
            </button>
           </form>

          </div>
        </div>
      </div>
    </>
  )
}

export default App
