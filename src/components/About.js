import React from 'react'

export default function About(props) {
    
    // const [myStyle, setMyStyle] = useState({
    //     color:'black',
    //     backgroundColor:'white'
    // })

    let myStyle = {
        color: props.mode === 'dark'? 'white' :'black',
        backgroundColor: props.mode ==='dark'?'rgb(50 60 76)': 'white'
        
    }
   
  return (
    <div className='container my-3' style={myStyle}>
      <h1>About Us</h1>
      <p>This website helps you to perform different operstions like Converting text to UpperCase, Converting text to LowerCase, Converting only first letter of each word to uppercase. Have a great time using this Website!! </p>
      
    </div>
  )
}
