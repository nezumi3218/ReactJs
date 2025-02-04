import { useCallback, useEffect, useRef, useState } from 'react'


function App() {
  const [length, setLength] = useState(8)
  const [number, setNumber] = useState(false);
  const [char, setChar] = useState(false);
  const [password, setPassword] = useState("")
  

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (number) str+= "0123456789"
    if (char) str+= "!@#$%^&*~_-+="

    for(let i = 0; i<= length; i++){
      let c = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(c)
    }

    setPassword(pass)

  } , [length, number, char, setPassword])

  const copyPassword = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    passwordGenerator()
  }, [length,number,char,passwordGenerator])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500  bg-gray-700 '> 
        <h1 className='text-white text-center text-3xl my-3'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4 bg-white'>
          <input 
            type="text" 
            value = {password}
            className='outline-none w-full py-1 px-3 '
            placeholder='Password'
            readOnly
          />
          {/* <button className='outline-none bg-pink-700 text-white px-3 py-0.5 shrink-0'
          onClick={passwordGenerator}
          >Generate</button> */}
          <button
          onClick={copyPassword}
          className="bg-pink-700 hover:bg-pink-500 outline-none text-white cursor-pointer py-0.5 px-2 shrink-0">Copy</button>
          </div>
          <div className='flex text-sm gap-x-2'>
            <div className='flex items-center gap-x-1'>
              <input 
              type="range"
              min={6}
              max={100}
              value={length}
              className='cursor-pointer'
              onChange={(e) => {setLength(e.target.value)}}
              />

              <label>Length: {length}</label>
            </div>
            <div className='flex items-center gap-x-1'>
              <input 
              type="checkbox"
              defaultChecked={number}
              id='numberInput'
              onChange={() => {
                setNumber((prev) => !prev);
              }}
              />
                <label htmlFor='numberInput'>Numbers</label>
            </div>
            <input 
              type="checkbox"
              defaultChecked={char}
              id='characterInput'
              onChange={() => {
                setChar((prev) => !prev);
              }}
              />
              <label htmlFor='characterInput'>Characters</label>
          </div>
      </div>
    </>
  )
}

export default App
