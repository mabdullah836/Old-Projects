import React, { useEffect, useState } from 'react'
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import "./App.css"

const App = () => {
  let [password, setPassword] = useState("");
  let [length, setLength] = useState(12);
  let [numbers, setNumbers] = useState(false);
  let [symbols, setsymbols] = useState(false);
  let [upperCase, setUpperCase] = useState(false);
  let [lowerCase, setLowerCase] = useState(false);

  //  console.log(upperCase)

  useEffect(() => {
    generatePssword()
  }, [numbers, length, symbols, lowerCase, upperCase])

  

  function generatePssword() {
    let pass = '';
    let str = "";
    if (numbers) {
      str += "0123456789"

    }
    if (symbols) {
      str += "!@#$%^&*()-_=+[{]}\\|;:'\",<.>/?"
    }
    if (upperCase) {
      str += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    }
    if (lowerCase) {
      str += "abcdefghijklmnopqrstuvwxyz"
    }
    for (let i = 0; i < length; i++) {
      let randomNumber = Math.random() * str.length
      pass += str.charAt(randomNumber)
    }
    setPassword(pass)
  }
  const CopyToClipboard = () =>{navigator.clipboard.writeText(password)} 
      

  return (
    <>
      <div id='Pass'>
        <h2 id='password'>{password} <button onClick={CopyToClipboard}><ContentCopyIcon /></button></h2>
      </div>
         
       <div className='container'>
           <h2>Customize Your Password</h2>
          <hr />
            <p>Password Length</p>
          <div id='flex'>
            <div id='label'>

              <label  htmlFor="length">{length}</label>
            </div>
            <div className='range'> 
            <input type="range" min={1} max={30} id='length' onChange={(e) => setLength(e.target.value)} />
            </div>
            <div id='result'>
              <input type="checkbox"  id="numbers" className='inputs' onChange={(e) => setNumbers(e.target.checked)} />
              <label htmlFor="numbers">Number</label>
              <br />
              <input type="checkbox" id="symbols" className='inputs' onChange={(e) => setsymbols(e.target.checked)} />
              <label htmlFor="symbols">Symbols</label>
              <br />
              <input type="checkbox" id="upperCase" className='inputs' onChange={(e) => setUpperCase(e.target.checked)} />
              <label htmlFor="upperCase">UpperCase</label>
              <br />
              <input type="checkbox" id="lowerCase" className='inputs' onChange={(e) => setLowerCase(e.target.checked)} />
              <label htmlFor="lowerCase">LowerCase</label>
            </div>
          </div>
      </div>


      </>
  )
}

export default App;