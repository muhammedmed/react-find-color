import colorNames from 'colornames';

const Input = ({colorValue, setColorValue, setHexValue, isDarktext, setIsDarkText}) => {
  return(
  <form onSubmit={(e)=>e.preventDefault()}>
  <label>Add Color Name:</label>
  <input type="text" autofocus placeholder="Add color name" required value={colorValue} onChange={(e)=> {
      setColorValue(e.target.value);
      setHexValue(colorNames(e.target.value));
    }}/>
    <button
    type="button"
    onClick={()=>setIsDarkText(!isDarktext)}
    
    >Toggle Text Color</button>
  </form>
  ) 
};

export default Input;
