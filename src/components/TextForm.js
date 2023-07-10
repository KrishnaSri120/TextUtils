import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to upper case.", "success")
    }
    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lower case.", "success")
    }
    const handleCapClick = () => {
        const arr = text.split(/\s+/);
        for (var i = 0; i < arr.length; i++) {
            arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);

        }
        const newText = arr.join(" ");
        setText(newText)
        props.showAlert("Converted to capitalize.", "success")
    }
    const handleCopyClick = () => {
        let copyText = document.getElementById("myBox");
        let c = navigator.clipboard.writeText(copyText.value)
        if (c != null)
            props.showAlert("Copied text.", "success")

    }
    const handleDownloadClick = () => {
        const link = document.createElement("a");
        const content = text;
        const file = new Blob([content], { type: 'text/plain' });
        link.href = URL.createObjectURL(file);
        link.download = "Content.txt";
        link.click();
        URL.revokeObjectURL(link.href);
        props.showAlert("Text file downloaded.", "success")
    }
    const handleClearClick = () => {
        let newText = '';
        setText(newText)
    }
    const handleOnChange = (event) => {
        console.log("On Change");
        setText(event.target.value)

    }
    const [text, setText] = useState("");

    return (
        <>
            <div style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <div className='container'>
                    <h1>{props.heading}</h1>
                    <div className="mb-3">
                        <label htmlFor="myBox" className="form-label">Enter your text below</label>
                        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8" style={{ background: props.mode === 'dark' ? 'rgb(25 72 110)' : 'white', color: props.mode === 'dark' ? 'white' : '#042743' }}></textarea>
                    </div>
                    <button className='btn btn-primary mx-1 my-1' disabled={text.length === 0} onClick={handleUpClick}>Convert To Uppercase</button>
                    <button className='btn btn-primary mx-1 my-1' disabled={text.length === 0} onClick={handleLoClick}>Convert To Lowercase</button>
                    <button className='btn btn-primary mx-1 my-1' disabled={text.length === 0} onClick={handleCapClick}>Convert To Capitalize</button>
                    <button className='btn btn-primary mx-1 my-1' disabled={text.length === 0} onClick={handleCopyClick}>Copy Text</button>
                    <button className='btn btn-primary mx-1 my-1' disabled={text.length === 0} onClick={handleDownloadClick}>Download </button>
                    <button className='btn btn-primary mx-1 my-1' disabled={text.length === 0} onClick={handleClearClick} >Clear Text</button>
                </div>
                <div className='container my-3'>
                    <h1>Your text summary</h1>
                    <p>{text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} words , {text.length} charecters</p>
                    <p> {0.008 * text.split(" ").filter((element) => { return element.length !== 0 }).length} minutes  read</p>
                </div>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : 'Nothing to preview!'}</p>
            </div>
        </>
    )
}
