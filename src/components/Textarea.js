import React, { useState } from 'react'

export default function Textarea(props) {
    const [text, setText] = useState("");
    const handleUpClick = () => {
        console.log("uppercase clicked" + text);
        let NewText = text.toUpperCase();
        setText(NewText)

    }

    const handleLowClick = () => {
        //console.log("uppercase clicked" + text);
        let NewText = text.toLowerCase();
        setText(NewText)

    }
    
    const handleClearClick = () => {
        //console.log("uppercase clicked" + text);
        let NewText = ' ';
        setText(NewText)

    }

    const HandleOnChange = (event) => {
        console.log("on chage");
        setText(event.target.value);
    }
    return (
        <>
            <div className='container'>
                <h1>
                    {props.heading}
                </h1>
                <div className="mb-3">
                    <textarea className="form-control" onChange={HandleOnChange} value={text} id="myBox" rows="8"></textarea>
                </div>
                <button className='btn btn-primary mx-2' onClick={handleUpClick}>CONVERT TO UPPERCASE</button>
                <button className='btn btn-primary mx-2' onClick={handleLowClick}>CONVERT TO lowercase</button>
                <button className='btn btn-primary mx-2' onClick={handleClearClick}>Clear</button>

            </div>
            <div className="container my-3">
            <h1>
                your text summary 
            </h1>
            <p>
                {text.split(" ").length} words and {text.length} character
            </p>
            <p> { 0.008 * text.split(" ").length} Minute read</p>
            <h2>
                Preview
            </h2>
            <p> {text} </p>
            </div>
        </>
    )
}
