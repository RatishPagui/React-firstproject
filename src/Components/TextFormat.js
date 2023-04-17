import React, {useState} from 'react'

export default function TextFormat() {

    const [text,setText] = useState("")

    const handleUpCase = () => {
      let newText = text.toUpperCase()
      setText(newText)
    }
  
    const handleLwCase = () => {
      let newText = text.toLowerCase()
      setText(newText)
    }
  
    const handleOnChange = (event) => {
      setText(event.target.value)
    }

    return (
        <>
            <div className="container">
                <h1>Text Formatter</h1>
                <div className="mb-3 my-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Type text here</label>
                    <textarea onChange={handleOnChange} value={text}
                        className="form-control" id="exampleFormControlTextarea1" rows="8" ></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={handleUpCase}>UpperCase</button>
                <button className="btn btn-primary mx-2" onClick={handleLwCase}>LowerCase</button>
                <br /><br />
                <p>{text.split(" ").filter((ele)=>{return ele.length!==0}).length} Words and {text.length} Character</p>
            </div>
        </>
    )
}
