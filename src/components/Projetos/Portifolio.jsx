import React from "react";
import Projetos from "./Projetos";
import "./Portifolio.css";
import "./Data";

const Portifolio = () => {
    return (
        <section className="portifolio section" id="projetos" >
            <h2 className="section__title">Portifólio</h2>
            <span className="section__subtitle">Meus últimos trabalhos</span>

            <Projetos/>
        </section>
    )
}
export default Portifolio;