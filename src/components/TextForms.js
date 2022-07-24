import React , {useState}from 'react'

export default function TextForms(props) {
  
const [text, setText] = useState('Enter text here');
const handleUpperClick =() =>{
  // console.log("UpperCase was clicked" + text);
  let newText = text.toUpperCase();
  setText(newText);
  props.showAlert("Converted to Upper Case","success");
}

const handleLowerClick=()=>{
  let newText = text.toLowerCase();
  setText(newText);
  props.showAlert("Converted to Lower Case","success");
}

const handleUpperFirstClick=()=>{
  const arr = text.split(" ");
  for(var i=0; i<arr.length;i++){
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    let newText = arr.join(" ");
    setText(newText);
    props.showAlert("First Letter of each word capitalised","success");
  }
}

const handleOnChange=(event)=>{
  // console.log("onchange ");
  setText(event.target.value);
}

const handleClear=()=>{
  let newText = ("");
  setText(newText);
  props.showAlert("Text Cleared","success");
}
  return (
    <>
    <div className='container' style={{color: props.mode === 'dark'?'white':'black'}} >
     <h1>{props.heading }</h1>
  <div className ="mb-3">
 
<textarea className="form-control" value= {text} onChange={handleOnChange} style={{color: props.mode === 'dark'?'white':'black', backgroundColor: props.mode==='dark'?'rgb(50 60 76)':'white'}}id="myBox" rows="3"></textarea>
  </div> 
  <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleUpperClick}>Convert to UpperCase</button>
  <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleLowerClick}>Convert to LowerCase</button>
  <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleUpperFirstClick}>Convert First Letter to UpperCase</button>
  <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleClear}>Clear Text</button>
    </div>
    <div className="container my-3" style={{color: props.mode === 'dark'?'white':'black'}}>
      <h2>Your Text Summary</h2>
      <p>{text.split(/\s+/).filter(item => item).length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} Minutes to read</p>
      <h2>Preview</h2>
      <p >{text}</p>
    </div>
    </>
  )
}
