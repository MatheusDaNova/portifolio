import React, { useEffect, useState } from "react";
import { ProjetosData } from "./Data";
import { projetosNav } from "./Data";
import ProjetoItens from "./ProjetoItens";
import { handleError } from "vue";

const Projetos = () => {
        const [item, setItem] = useState({name: "todos"});
        const [projetos, setProjetos] = useState([]);
        const [active, setActive] = useState(0);

        useEffect(()=> {
            if(item.name === "todos" ){
                setProjetos(ProjetosData);
            } else {
                const novoProjeto = ProjetosData.filter((projeto) => {
                    return projeto.category.toLowerCase() === item.name;
                });
                setProjetos(novoProjeto);
            }

        }, [item]);

        const handleClick = (e, index)=>{
            setItem({ name: e.target.textContent.toLowerCase() });
            setActive(index);
        };
    return (
        <div>
            <div className="projetos__filtros">
                {projetosNav.map((item, index) => {
                    return (
                        <span onClick={(e) =>{ handleClick(e, index);}} 
                        className={`${active === index ? 'projetos-active' : ""} projetos__item`} key={index}>{item.name}</span>
                    )
                })}
            </div>

            <div className="projetos__container container grid">
                { projetos.map((item) =>{    
                    return (<ProjetoItens item={item} key={item.id}/> )
                })}
            </div>
        </div>
    )
} 
export default Projetos;