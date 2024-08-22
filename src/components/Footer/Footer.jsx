import React from "react";
import "./Footer.css";

const Footer = () => {
    return(
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">Matheus</h1>

                <ul className="footer__list">
                    <li>
                        <a href="#Sobre" className="footer__link">Sobre</a>
                    </li>

                    <li>
                        <a href="#contato" className="footer__link">Contato</a>
                    </li>

                    {/*
                    <li>
                        <a href="#Depoimentos" className="footer__link">Depoimentos</a>
                    </li> 
                    */}
                </ul>

                <div className="footer__social">
                    <a href="https://www.linkedin.com/in/matheus-da-nova-a8178a25b/" className="footer__social-link" target="_blank">
                        <i class="bx bxl-linkedin"></i>
                    </a>
                </div>

                <span className="footer__copy">&#169; Matheus Pereira , Todos os direitos reservados</span>
            </div>
        </footer>
    )
}
export default Footer