import React,{useState} from 'react'

export default function Textarea(props) {
    const [text, setText] = useState("ENter Text Here");
    const handleUpClick= () =>{
    console.log("uppercase clicked" + text);
    let NewText=text.toUpperCase();
    setText(NewText)

    }
    const HandleOnChange= (event)=>{
        console.log("on chage");
        setText(event.target.value);
    }
    return (
        <div>
             <h1>
                 {props.heading}
             </h1>
            <div className="mb-3">
                <textarea className="form-control" onChange={HandleOnChange} value={text} id="myBox" rows="8"></textarea>
            </div>
            <button className='btn btn-primary' onClick={handleUpClick}>CONVERT TO UPPERCASE</button>

             </div>
    )
}
