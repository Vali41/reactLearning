import { useState } from 'react'
import {InputBox} from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo'


function App() {

  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertedAmount, setConvertedAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(from)
    
  const usCurrencyInfo = useCurrencyInfo("usd")

  const options = Object.keys(currencyInfo)
  

  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  
  
  const convert = () => {
    setConvertedAmount(Math.round((currencyInfo[to]*amount) * 100) / 100)
  }

  let date = new Date().toLocaleDateString()
  return (
    <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-gradient-to-t from-indigo-400 via-purple-600 to-pink-800"
        
    >
        <div className='bg-white w-min h-min flex flex-col justify-between rounded-xl shadow-xl  '>
            <div>
                <h1 className='text-3xl text-center font-bold text-red-800 p-4'><span className='text-green-800'>{date}</span>:USD Exchange Rate
                </h1>
            </div>
            <div className='flex flex-col  sm:flex-row'>
            <h2 className='rounded-xl m-2 border-2 border-indigo-600 p-4  bg-#12356 text-black font-bold shadow-lg hover:bg-sky-800 hover:text-white'>Euro : <p className='font-bold text-#11fb8d  p-2 text-center '>{Math.round(usCurrencyInfo["eur"] * 100) / 100}</p></h2>
            <h2 className='rounded-xl m-2 border-2 border-indigo-600 p-4  bg-#12356 text-black font-bold shadow-lg hover:bg-sky-800 hover:text-white'>Russia: <p className='font-bold text-#11fb8d  p-2 text-center '>{Math.round(usCurrencyInfo["rub"] * 100) / 100}</p></h2>
            <h2 className='rounded-xl m-2 border-2 border-indigo-600 p-4  bg-#12356 text-black font-bold shadow-lg hover:bg-sky-800 hover:text-white'>India: <p className='font-bold text-#11fb8d  p-2 text-center '>{Math.round(usCurrencyInfo["inr"] * 100) / 100}</p></h2>
            </div>
        </div>
        <div className="w-full">
            <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        convert()
                       
                    }}
                >
                    <h1 className='text-3xl text-center font-bold text-white  p-4'>Currency Converter</h1>
                    <div className="w-full mb-1">
                        <InputBox
                            label="From"
                            amount={amount}
                            currencyOptions={options}
                            onCurrencyChange={(currency) => setFrom(currency)}
                            selectCurrency={from}
                            onAmountChange={(amount) => setAmount(amount)}
                        />
                    </div>
                    <div className="relative w-full h-0.5">
                        <button
                            type="button"
                            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                            onClick={swap}
                        >
                            swap
                        </button>
                    </div>
                    <div className="w-full mt-1 mb-4">
                        <InputBox
                            label="To"
                            amount={convertedAmount}
                            currencyOptions={options}
                            onCurrencyChange={(currency) => setTo(currency)}
                            selectCurrency={to}
                            amountDisable
                        />
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                        Convert {from.toUpperCase()} to {to.toUpperCase()}
                    </button>
                </form>
            </div>
        </div>
    </div>
);
}

export default App