import React from "react";
import "./Skills.css";
import Frontend from "./Frontend";
import Backend from "./Backend";

const Skills = () =>{
    return (
        <section className="skills section" id="skills">
            <h2 className="section__title">Conhecimentos</h2>
            <span className="section__subtitle">Tecnologias que já trabalhei</span>
            
            <div className="skills__container container grid">
                <Frontend />
                <Backend />

            </div>
        </section>
    )
}
export default Skills