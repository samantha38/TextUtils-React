import React, {useState} from 'react'


export default function TextForm(props) {
    const [text, setText] = useState('');

    const handleUpClick = ()=>{
    //setText('You have clicked on button');
    let newText = text.toUpperCase();
    setText(newText)
    }

    const handleLoClick = ()=>{
        //setText('You have clicked on button');
        let newText = text.toLowerCase();
        setText(newText)
        }

        const handleClearText = ()=>{
          let newText = '';
          setText(newText)
          props.showAlert("Cleared Text", "success");
        }

        const handleCopy = ()=>{
          navigator.clipboard.writeText(text);
          props.showAlert("Copied to clipboard", "success");
        }

        const handleExtraSpaces = ()=>{
          let newText = text.split(/[ ]+/);
          setText(newText.join(" "));
          props.showAlert("Extra spaces removed", "success");
        }

    const handleOnChange = (event)=>{
        setText(event.target.value)
    }

  return (
    <>
<div className = "container mx-3">
<div className="my-3">
<h1 className="mb-4" style={{color:props.mode === 'light'?'black':'white'}}>{props.heading} </h1>

<textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode === 'light'?'white':'rgb(36, 74, 104)', color:props.mode === 'light'?'black':'white'}}id="myBox" rows="8"></textarea>

</div>
<button disabled ={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to UpperCase</button>
<button disabled ={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to LowerCase</button>
<button disabled ={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearText}>Clear Text</button>
<button disabled ={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
<button disabled ={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>

</div>

<div className = "container my-3 mx-3" style={{color:props.mode === 'light'?'black':'white'}}>
<h1>Your Text Summary</h1>
<p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
<p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length } Minutes read</p>
<h2>Preview</h2>
<p>{text.length>0?text:"Nothing to preview it"}</p>
</div>
</>
  )
}
