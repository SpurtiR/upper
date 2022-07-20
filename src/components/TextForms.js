import React , {useState}from 'react'

export default function TextForms(props) {
  
const [text, setText] = useState('Enter text here');
const handleUpperClick =() =>{
  // console.log("UpperCase was clicked" + text);
  let newText = text.toUpperCase();
  setText(newText);
}

const handleOnChange=(event)=>{
  // console.log("onchange ");
  setText(event.target.value);
}
  return (
    <div>
     <h1>{props.heading }</h1>
  <div className ="mb-3">
 
  <textarea className="form-control" value= {text} onChange={handleOnChange} id="myBox" rows="3"></textarea>
  </div> 
  <button className="btn btn-primary" onClick={handleUpperClick}>Convert to UpperCase</button>
    </div>
  )
}
