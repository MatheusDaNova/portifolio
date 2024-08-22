import React, { useState } from "react";
import "./Qualificacoes.css";

const Qualificacoes = () => {
        const [toggleState, seToggleState] = useState(1);

        const toggleTab = (index) => {
            seToggleState(index);
        }

    return ( 
        <section className="qualification section">
            <h2 className="section__title">Qualificações</h2>
            <span className="section__subtitle">Minha formação atualmente</span>


            <div className="qualification__container container">
                <div className="qualification__tabs">

                    <div className={toggleState === 1 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex "} onClick={() => toggleTab (1)}>
                        <i className="uil uil-graduation-cap qualification__icon"></i>Formação 
                    </div>

                    <div className={toggleState === 2 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"}  onClick={() => toggleTab (2)}>

                        <i className="uil uil-briefcase-alt qualification__icon"></i> Experiência
                    </div>
                </div>

                <div className="qualification__sections">
                    <div className={toggleState === 1 ? "qualification__content qualification__content-active" : "qualification__content"}>

                        <div className="qualification__data">
                            
                            <div>
                                <h3 className="qualification__title">Desenvolvimento de sistemas</h3>
                                <span className="qualification__subtitle">Colégio Pedro II</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt">2019 - 2022</i>
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">Engenharia Eletrônica</h3>
                                <span className="qualification__subtitle">CEFET</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt">2023 - 2024</i>
                                </div>
                            </div>
                        </div>

                        <div className="qualification__data">
                            
                            <div>
                                <h3 className="qualification__title"> Computação</h3>
                                <span className="qualification__subtitle">UFF</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt">2024 - Atualmente</i>
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>


                    </div>
                </div>

                <div className="qualification__sections">
                    <div className={toggleState === 1 ? "qualification__content qualification__content" : "qualification__content-active"}>
                        <div className="qualification__data">
                            
                        <div>
                                <h3 className="qualification__title">Desenvolvedor Web autônomo</h3>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt">2024 - Atualmente</i>
                                </div>
                            </div>


                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                        <div className="qualification__data">
                            <div></div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Qualificacoes