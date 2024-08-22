import React, { useState } from "react";
import "./Servicos.css";

const Servicos = () =>{
        const [toggleState, seToggleState] = useState(0);

        const toggleTab = (index) => {
            seToggleState(index);
        }

    return (
       <section className="servicos section" id="servicos">
         <h2 className="section__title">Serviços</h2>
         <span className="section__subtitle">Quais serviços presto</span>

        <div className="servicos__container container grid">
            <div className="servicos__content">
                <div>
                    <i className="uil uil-globe servicos__icon"></i>
                    <h3 className="servicos__title">
                        Desenvolvimento <br /> Web
                    </h3> 
                </div>

                <span className="servicos__button" onClick={() => toggleTab(1)}>Saiba mais 
                    <i className="uil uil-arrow-right servicos__button-icon"></i>
                </span>

                <div className={toggleState === 1 ?  "servicos__modal active-modal" : "servicos__modal"}>

                    <div className="servicos__modal-content">
                        <i onClick={() => toggleTab(0)} class="uil uil-times servicos__modal-close"></i>
                        
                        <h3 className="servicos__modal-title">Desenvolvimento</h3>
                        <p className="servicos__modal-description">Dentro deste segmento, eu presto serviços diversos, que vão de ladding pages a aplicações mais complexas.</p>

                        <ul className="servicos__modal-servicos grid">
                            <li className="servicos__modal-servico">
                                <i className="uil uil-check-circle servicos__modal-icon"></i>
                                <p className="servicos__modal-info">Desenvolvimento de interfaces</p>
                            </li>

                            <li className="servicos__modal-servico">
                                <i className="uil uil-check-circle servicos__modal-icon"></i>
                                <p className="servicos__modal-info">Faço design para seu negócio</p>
                            </li>

                            <li className="servicos__modal-servico">
                                <i className="uil uil-check-circle servicos__modal-icon"></i>
                                <p className="servicos__modal-info">Construção de aplicações </p>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
            <div className="servicos__content">
                <div>
                    <i className="uil uil-cog servicos__icon"></i>
                    <h3 className="servicos__title">
                        Manutenção &<br /> Suporte
                    </h3> 
                </div>

                <span className="servicos__button" onClick={() => toggleTab(2)}>Saiba mais 
                    <i className="uil uil-arrow-right servicos__button-icon"></i>
                </span>

                <div className={ toggleState=== 2 ?   "servicos__modal active-modal" : "servicos__modal"}>

                    <div className="servicos__modal-content">
                        <i onClick={() => toggleTab(0)} className="ui uil-times servicos__modal-close"></i>
                        
                        <h3 className="servicos__modal-title">Manutenção</h3>
                        <p className="servicos__modal-description">Dentro deste segmento, eu presto serviços diversos, para correção de qualquer problema existente no seu sistema.</p>

                        <ul className="servicos__modal-servicos grid">
                            <li className="servicos__modal-servico">
                                <i className="uil uil-check-circle servicos__modal-icon"></i>
                                <p className="servicos__modal-info">Correção de bugs</p>
                            </li>

                            <li className="servicos__modal-servico">
                                <i className="uil uil-check-circle servicos__modal-icon"></i>
                                <p className="servicos__modal-info">Otimização de sistemas</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="servicos__content">
                <div>
                    <i className="uil uil-comment-verify servicos__icon"></i>
                    <h3 className="servicos__title">
                        Melhorias &<br /> Aprimoramento
                    </h3> 
                </div>

                <span className="servicos__button" onClick={() =>toggleTab(3)}>Saiba mais 
                    <i className="uil uil-arrow-right servicos__button-icon"></i>
                </span>

                <div className={toggleState === 3 ? "servicos__modal active-modal" : "servicos__modal"}>

                    <div className="servicos__modal-content">
                        <i onClick={() => toggleTab(0)} className="ui uil-times servicos__modal-close"></i>
                        
                        <h3 className="servicos__modal-title">Aprimoramentos</h3>
                        <p className="servicos__modal-description">Dentro deste segmento, eu presto serviços diversos, para melhora de desempenho ou atualização do seu sistema.</p>

                        <ul className="servicos__modal-servicos grid">
                            <li className="servicos__modal-servico">
                                <i className="uil uil-check-circle servicos__modal-icon"></i>
                                <p className="servicos__modal-info">Redesign da identidade visual de site ou software</p>
                            </li>

                            <li className="servicos__modal-servico">
                                <i className="uil uil-check-circle servicos__modal-icon"></i>
                                <p className="servicos__modal-info">Reformulação completa de sistemas</p>
                            </li>

                            <li className="servicos__modal-servico">
                                <i className="uil uil-check-circle servicos__modal-icon"></i>
                                <p className="servicos__modal-info">Criação de API's para sistema</p>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
        </div>
       </section>
    )
}

export default Servicos