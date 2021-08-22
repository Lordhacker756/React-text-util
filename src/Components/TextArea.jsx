// Use rfcp
import React from 'react'
import { useState } from 'react'


function TextArea(props) {
    const [Text, setText] = useState("");

    var textCapitalize = () =>
    {
        const mySentence = Text;
        const words = mySentence.split(" ");
        for (let i = 0; i < words.length; i++) {
       words[i] = words[i][0].toUpperCase() + words[i].substr(1);
        }

        var final = words.join(" ");
        setText(final);
        props.showAlert('✅ Text Capitalized Successfully! 🥳');
        return final;
    }

    var textUpdater = (event) =>{
        setText(event.target.value)
    }

    var textCaps = () =>
    {
        setText(Text.toUpperCase());
        props.showAlert('✅ Text Converted To Upper Case! 🥳');
    }
    var textDropCaps = () =>
    {
        setText(Text.toLowerCase());
        props.showAlert('✅ Text Converted To Lower Case! 😄');
    }
    var textClear = () =>
    {
        setText("");
        props.showAlert('✅ Text Cleared! 🗑️');
    }
    var textCopy = () =>
    {
        props.showAlert('✅ Text Copied To Clipboard! 📃');
        navigator.clipboard.writeText(Text);
    }

    var time=0;
    var timeS="";
    var words = Text.split(" ").length;
    if(words===1 && (Text.length === 0))
    {
        words=0;
    }

    if(words===0)
    {
        timeS="Start Typing To Analyze Read Time😀";
    }
    else if(words>0 && (words*0.008)<1)
    {
        timeS = "Under 1 Minute Read"
    }
    else
    {
        time = words*0.008;
        timeS=time.toString();
        timeS=timeS+' '+'Minute Read😄';
    }

    return (
        <>
        <h1 className={`text-center my-3 mt-5 text-${props.theme==='light'?'dark':'light'}`}>Text Converter Tool</h1>
        <div className="container mb-3">
        <div className="row">
            <div className="col-lg-6">
            <textarea className="form-control mb-3" style={{background:`${props.theme==='light'?'white':'#343A40'}`,color:`${props.theme==='dark'?'white':'#343A40'}`}} onChange={textUpdater} id="exampleFormControlTextarea1" value={Text} placeholder="Enter Text Here" rows="8"/>
            <button className="btn btn-primary mr-md-2" onClick={textCapitalize}>Capitalize</button>
            <button className="btn btn-success mx-md-2" onClick={textDropCaps}>Lower Case</button>
            <button className="btn btn-warning mx-md-2 text-white" onClick={textCaps}>Upper Case</button>
            <button className="btn btn-info mx-md-2" onClick={textCopy}>Copy</button>
            <button className="btn btn-danger mx-md-2" onClick={textClear}>Clear Text</button>
            <h4 className={`mt-3 text-${props.theme==='light'?'dark':'light'}`} >Total Number Of Words Are {words}</h4>
                <p className={`text-${props.theme==='light'?'dark':'light'}`}>Total Number Of Characters Are {Text.length}</p>
                <p className={`text-bold text-${props.theme==='light'?'dark':'light'}`}>{timeS}</p>
            </div>
            <div className="col-lg-6">
            <div className="container preview" style={{borderColor:`${props.theme==='light'?'black':'white'}`}}>
            <div className="row">
                <div className="col-12" style={{minHeight:'25vh'}}>
                <h6 className={`text-${props.theme==='light'?'dark':'light'} mt-3`}>Upper Case</h6>
                <p className={`text-${props.theme==='light'?'dark':'light'}`}>{Text.toUpperCase()}</p>
                <div className="col-12" style={{minHeight:'25vh'}}>
                <h6 className={`text-${props.theme==='light'?'dark':'light'}`}>Lower Case</h6>
                <p className={`text-${props.theme==='light'?'dark':'light'}`}>{Text.toLowerCase()}</p>
                </div>
            </div>
        </div>
            </div>
            </div>
        </div>
        </div>
        </>
    )
}


export default TextArea