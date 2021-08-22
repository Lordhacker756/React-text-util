import React from 'react'
import AboutImg from '../About.jpg'

function About(props) {
    return (
        <>

<div className="containter-fluid">
    <div className="container">
        <div className="row">
            <div className="col">
                <h1 className={`text-center mt-4 text-${props.theme==='light'?'dark':'light'}`}>
                    Made By Utkarsh
                </h1>
            </div>
        </div>
        <div className="row my-5">
            <div className="col-lg-5 text-center">
                    <img className="img-rounded aboutimg" src={AboutImg} alt="" style={{width:'300px'}} />
            </div>
            <div className="col-lg-6 abouttext">
            <p className={` text-${props.theme==='light'?'dark':'light'}`}>
            <span style={{fontSize:'25px'}}>Hello There! ✋😄</span>
            <br/>
            Nice to E-Meet you!
            <br/>
            Let me guide you through my little profile😉
            <br/>
            First, allow me to show how can I be of help to you,
            <br/>
            I'm An Experienced Web Developer
            (Umm Well If 2 Years of experience can make you eligible to be referred to as Experienced🤔)
            <br/>
            Walking in this path with a burning passion to learn and grow in this field, I have Delivered 15+ Premium Websites To Leading Businesses.
            <br/>    
            This is my first React App, Hope You Like It😄 , All suggestions are welcome! 
            <br/>
            Contact Me On My Linkedin!    
                </p>
            <div className="btn btn-primary linkedin">
            <a href="https://in.linkedin.com/in/utkarsh708" target="_blank" style={{textDecoration:'none',color:'white'}}>
            I'm Here!😄</a>
            </div>
              
            </div>
        </div>
    </div>
</div>
</>
    )
}

export default About
