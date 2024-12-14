import React, { useState } from 'react'
import './pg.css'

export default function PG() {
  const [length, setLenth] = useState(8);
  const [includeUpperCase, setIncludeUpperCase] = useState(true)
  const [includeLowerCase, setIncludeLowerCase] = useState(true)
  const [includeNumbers, setIncludeNumbers] = useState(true)
  const [includeSymbols, setIncludeSymbols] = useState(true)
  const [password, setPassword] = useState("")

  const generatePassword = () => {
    let charset = "";
    if (includeUpperCase) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (includeLowerCase) charset += "abcdefghijklmnopqrstuvwxyz";
    if (includeNumbers) charset += "0123456789";
    if (includeSymbols) charset += "*!@#$ %^&*()-_=+";
    console.log(charset);
    let generatedPassword = "";
    for (let i = 0; i < length; i++) {
      const randonIndex = Math.floor(Math.random() * charset.length);
      generatedPassword += charset[randonIndex];
    }
    setPassword(generatedPassword)
  }

  const copyClipboard = () => {
    navigator.clipboard.writeText(password);
    alert("Password Copied ✔")
  }
  return (
    <div>
      <div className="password-generator">
        <h2>Strong Password Generator</h2>
        <div className="input-group">
          <label htmlFor="num">Password Length:</label>
          <input type="number" id="num" value={length} onChange={(e) => setLenth(parseInt(e.target.value))} />
        </div>
        <div className="checkbox-group">
          <input type="checkbox" id="upper" checked={includeUpperCase}
            onChange={(e) => setIncludeUpperCase((e.target.checked))} />
          <label htmlFor="upper">Include Uppercase</label>
        </div>
        <div className="checkbox-group">
          <input type="checkbox" id="lower" checked={includeLowerCase}
            onChange={(e) => setIncludeLowerCase((e.target.checked))} />
          <label htmlFor="lower">Include Lowercase</label>
        </div>
        <div className="checkbox-group">
          <input type="checkbox" id="numbers" checked={includeNumbers}
            onChange={(e) => setIncludeNumbers((e.target.checked))} />
          <label htmlFor="numbers">Include Numbers</label>
        </div>
        <div className="checkbox-group">
          <input type="checkbox" id="symbols" checked={includeSymbols}
            onChange={(e) => setIncludeSymbols((e.target.checked))} />
          <label htmlFor="symbols">Include Symbols</label>
        </div>
        <button className="generator-btn" onClick={generatePassword}>
          Generate Password
        </button>
        <div className="generate-password">
          <input type="text" readOnly value={password} />
          <button className="copy-btn" onClick={copyClipboard}>
            Copy
          </button>
        </div>
      </div>
    </div>
  )
}
