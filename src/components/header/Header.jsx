import React, { useState } from "react";
import "./header.css";

const Header = () => {

    window.addEventListener("scroll", function () {
        const header = document.querySelector(".header");

        if (this.scrollY >= 80) header.classList.add("scroll-header");
        else header.classList.remove("scroll-header");})

    /* Toggle Menu */
    const[Toggle, show_menu] = useState(false);
    const[activeNav, setActiveNav] = useState("#home");

    return(
      <header className="header">
          <nav className="nav container">
              <a href="#" className='nav__logo'>Matheus</a>
   
              <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
                  <ul className="nav__list grid">
                      
                      <li className="nav__item">
                          <a href="#Home" onClick={() => setActiveNav("#home")} className={activeNav === "#home" ? "nav__link active__link" : "nav__link"}>
                              <i className="uil uil-estate nav__icon"></i> Início
                          </a>
                      </li>
  
                      <li className="nav__item">
                          <a href="#Sobre" onClick={() => setActiveNav("#Sobre")} className={activeNav === "#Sobre" ? "nav__link active__link" : "nav__link"}>
                              <i className="uil uil-user nav__icon"></i> Sobre 
                          </a>
                      </li>
  
                      <li className="nav__item">
                          <a href="#skills" onClick={() => setActiveNav("#skills")} className={activeNav === "#skills" ? "nav__link active__link" : "nav__link"}>
                              <i className="uil uil-file-alt nav__icon"></i> Conhecimentos
                          </a>
                      </li>
  
                      <li className="nav__item">
                          <a href="#servicos" onClick={() => setActiveNav("#servicos")} className={activeNav === "#servicos" ? "nav__link active__link" : "nav__link"}>
                              <i className="uil uil-briefcase nav__icon"></i> Serviços
                          </a>
                      </li>
  
                      <li className="nav__item">
                          <a href="#projetos" onClick={() => setActiveNav("#projetos")} className={activeNav === "#projetos" ? "nav__link active__link" : "nav__link"}>
                              <i className="uil uil-scenery nav__icon"></i> 
                              Projetos
                          </a>
                      </li>
  
                      <li className="nav__item">
                          <a href="#contato" onClick={() => setActiveNav("#contato")} className={activeNav === "#contato" ? "nav__link active__link" : "nav__link"}>
                              <i className="uil uil-scenery nav__icon"></i> 
                              Contatos
                          </a>
                      </li>
                  </ul>
                  <i className="uil uil-times nav__close"  onClick={() => show_menu(!Toggle)}></i>
              </div>
  
              <div className="nav__toggle" onClick={() => show_menu(!Toggle)}>
              <i class="uil uil-apps" ></i>  
              </div>
          </nav>
      </header>
    );
  
  } ;
  export default Header 