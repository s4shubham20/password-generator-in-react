import './App.css';
import { useEffect, useState } from 'react';
import { NP, UP, LP, SP } from './Data/passcare';

function App() {
  let [generatePassword, setGeneratePassword]     = useState(''); 
  let [upperCase, setUpperCase]     = useState(false); 
  let [lowerCase, setlowerCase]     = useState(false); 
  let [specialCase, setspecialCase] = useState(false); 
  let [numberCase, setNubmerCase]   = useState(false); 
  let [passwordLen, setPasswordLen]   = useState(10); 

  useEffect(() => {
    // console.log(generatePassword);
  })

  const generatePasswordHandler = () => {
    if(specialCase || upperCase || lowerCase || numberCase){
      if(specialCase || upperCase || lowerCase || numberCase){
        let charSet = '';
        let finalPassword= '';
        if(upperCase) charSet+=UP;
        if(lowerCase) charSet+=LP;
        if(specialCase) charSet+=SP;
        if(numberCase) charSet+=NP;

        for(let i=0; i < passwordLen; i++){
          finalPassword+= charSet.charAt(Math.floor(Math.random() * charSet.length));
        }
        setGeneratePassword(finalPassword);
      }
    }
  }

  const copyPassHandler = (evt) => {
    if(generatePassword != ""){
      navigator.clipboard.writeText(generatePassword);
      evt.target.innerText = "Copied";
      setTimeout(() => {
        evt.target.innerText = "Copy";
      }, 5000);
    }
  }
  return (
   <>
      <div className="password-generator">
        <h2>Password Generator</h2>
        <div className="password-box">
          <input type="text" name="password" value={generatePassword} onChange={(evt) => setGeneratePassword(evt.target.value)} placeholder="Generate Password"/>
          <button onClick={copyPassHandler}>Copy</button>
        </div>
        <div className="password-length">
          <p>Password Length</p>
          <input type="number" name="length" min={10} max="20" value={passwordLen} onChange={(evt) => setPasswordLen(evt.target.value)} placeholder="Length"/>
        </div>
        <div className="password-length">
          <p>Include Uppercase</p>
          <input type="checkbox" name="length" checked={upperCase} onChange={() => setUpperCase(!upperCase)}/>
        </div>
        <div className="password-length">
          <p>Include Lowercase</p>
          <input type="checkbox" name="length" checked={lowerCase} onChange={() => setlowerCase(!lowerCase)}/>
        </div>
        <div className="password-length">
          <p>Include Special Case</p>
          <input type="checkbox" name="length" checked={specialCase} onChange={() => setspecialCase(!specialCase)}/>
        </div>
        <div className="password-length">
          <p>Include Numbers</p>
          <input type="checkbox" name="length" checked={numberCase} onChange={() => setNubmerCase(!numberCase)}/>
        </div>
        <button className="btn" onClick={generatePasswordHandler}>Generate Password</button>
      </div>
   </>
  );
}

export default App;
