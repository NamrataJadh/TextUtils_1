import React, {useState} from 'react'

export default function TextForm(props) {
  const [text, setText] = useState("")
  

  const handleOnChange = (e) => {
    setText(e.target.value);
    console.log("Changed...");
  }

  const handleUpClick = () => {
    let newText1 = text.toUpperCase();
    setText(newText1);
    console.log("Clicked...");
  }

  const handleLoClick = () => {
    let newText2 = text.toLowerCase();
    setText(newText2);
    console.log("Clicked...");
  }

  const handleReClick = () => {
    setText("");
    console.log("Reset...");
  }

  const handleSpaceClick = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" ")) ;
    console.log("Spaces removed...");
  }

  const speakClick = () => {
    let msg = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(msg);

    const toggle = document.getElementById('toggle')
    if(toggle.textContent === "Speak"){
      toggle.innerHTML = "Stop!";
      console.log("runs...");
    }else{
      toggle.innerHTML = "Speak";
      if (toggle.innerHTML === "Speak"){
        window.speechSynthesis.cancel();
    }
    }
    console.log("Speaking...");
  }

  return (
    <div className='container abc'>
        <div className="mb-3 my-5">
          <h2 style={{color: props.style === 'light' ?  'black' :'white'}}>{props.title}</h2>
          <textarea 
            className="form-control textarea_style" 
            id="exampleFormControlTextarea1" 
            rows="6"
            // placeholder='Enter Text here...'
            value={text}
            style={{backgroundColor: props.style === 'light' ?  'white' :'black', 
                    color: props.style === 'light' ?  'black' :'white'}}
            onChange={handleOnChange}>
          </textarea>
        </div>

        <button disabled={text.length === 0} className='btn btn-primary mx-2 my-1' onClick={handleUpClick}>
        Uppercase</button>

        <button disabled={text.length === 0} className='btn btn-primary mx-2 my-1' onClick={handleLoClick}>
        Lowercase</button>

        <button disabled={text.length === 0} className='btn btn-primary mx-2 my-1' onClick={handleReClick}>
        Reset</button>

        <button disabled={text.length === 0} className='btn btn-primary mx-2 my-1' onClick={handleSpaceClick}>
        Remove Extra Spaces</button>

        <button disabled={text.length === 0} className='btn btn-primary mx-2 my-1' onClick={speakClick} id='toggle'> 
        Speak</button>

        <div className="my-5">
          <p style={{color: props.style === 'light' ?  'black' :'white'}}>
            {text.split(" ").filter((e)=> {return e.length!==0}).length} Words <br/>
            {text.length} Characters <br/>
            {0.008 * text.split(" ").filter((e)=> {return e.length!==0}).length} Minutes Read<br/>
          </p>
        
        </div>

        <div className="container my-5">
          <h2 style={{color: props.style === 'light' ?  'black' :'white'}}>Preview<hr/></h2> 
          <p style={{color: props.style === 'light' ?  'black' :'white'}} className="special">{text}</p>
        </div>
    </div>
  )
}


