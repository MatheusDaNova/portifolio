import React, {useState} from "react";

const Social = () => {

    const [isFocused, setIsFocused ] = useState(false); 
    const [isFocused2, setIsFocusedGit ] = useState(false); 
  
    const handleonMouseEnterLinkedin = () => { 
        setIsFocused(true); 
    }; 
    
    const handleonMouseEnterGithub = () =>{
        setIsFocusedGit(true);
    }

    const handleBlur = () => { 
        setIsFocused(false); 
    }; 

    const handleBlurGithub = () => { 
        setIsFocusedGit(false); 
    }; 

    return (
        <div className="home__social">
            <a href="https://www.linkedin.com/in/matheus-da-nova-a8178a25b/" className="home__social-icon" target="_blank">
                <i className= {isFocused ? "uil uil-linkedin" : "bx bxl-linkedin"}
                onMouseEnter={handleonMouseEnterLinkedin} 
                onMouseLeave={handleBlur} >
                </i>
            </a>
            <a href="https://github.com/MatheusDaNova" className="home__social-icon" target="_blank">
                <i className={isFocused2 ? "uil uil-github" :"uil uil-github-alt"}
                onMouseEnter={handleonMouseEnterGithub}
                onMouseLeave={handleBlurGithub}>
                </i>
            </a>

        </div>
    )
}

export default Social