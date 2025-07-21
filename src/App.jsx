import React, { useState } from 'react'
import InputShortener from './components/InputShortener'

const App = () => {
  const [inputValue, setinputValue] = useState("")
  return (
    <div className='w-full h-screen'>
      <InputShortener inputValue={inputValue} setInputValue={setinputValue} />
    </div>
  )
}

export default App