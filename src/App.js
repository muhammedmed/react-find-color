import Square from './components/Square'
import Input from './components/Input'
import {useState} from 'react'
function App() {
  const [colorValue, setColorValue] = useState('')
  const [hexValue, setHexValue] = useState('')
  const [isDarktext, setIsDarkText] = useState(true)


  return (
    <div className="App">
     <h1>Co <span>lor</span> </h1>
     <Square 
     colorValue={colorValue} 
     hexValue={hexValue}
     isDarktext={isDarktext}
     />
     <Input
     color={colorValue}
     setColorValue={setColorValue}
     setHexValue={setHexValue}
     isDarktext={isDarktext}
     setIsDarkText={setIsDarkText}
     />
    </div>
  );
}

export default App;
