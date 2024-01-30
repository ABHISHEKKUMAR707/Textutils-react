import React, { useState } from 'react';

export default function TextForm(props) {
  const [text, setText] = useState('Enter text here2');

  const handleUpClick = () => {
    console.log("Uppercase was clicked"+ text);
    let newtext= text.toUpperCase();
    setText(newtext)
 
  }

  const handleLoClick = () => {
    console.log("Lower was clicked"+ text);
    let newtext= text.toLowerCase();
    setText(newtext)
 
  }

  const handleOnChange = (event) => {
    console.log("on change");
    setText(event.target.value)
  }

  return (
    <>
    <div>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} id="mybox" rows="8"></textarea>
      </div>
      <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert To Uppercase</button>
      <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert To Lowercase</button>
    </div>
    <div className='container my-3'>
        <h1>Your text summary</h1>
        <p>{text.split(" ").length} words and {text.length} character</p>
        <p>{0.008*text.split(" ").length }{text.split(" ").length}Minute read</p>
        <h2>preview</h2>
        <p>{text}</p>

    </div>
    </>
  );
}

