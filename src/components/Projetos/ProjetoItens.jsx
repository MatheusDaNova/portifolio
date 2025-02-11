import React, { useState } from 'react';

const ProjetoItens = ({ item }) => {

    const [isVisible, setIsVisible] = useState(false);

    return (

        <div className="projetos__card" key={item.id}>

            <img src={item.image} alt="" className="projetos__img" />

            <h3 className="projetos__title">{item.title}</h3>
            <div className="projetos__subtitle">
                    <span className="projetos__button" onClick={() => setIsVisible(!isVisible)}>
                        Demo <i className="bx bx-right-arrow-alt projetos__button-icon"></i>
                    </span>
                    {isVisible && 
                    (<div key={item.id} className="projetos__links">
                        {item.git && item.git.trim() !== "" && (
                            <a href={item.git} className="projetos__links-button" target='_blank'>
                                <i className="bx bxl-github projetos__links-icons"></i>
                                
                                <span className='projetos__links-icons-subtitle'>Github</span>
                            </a>
                        )}
                        <a href={item.demo} className="projetos__links-button" target='_blank'>
                            <i className="bx bx-globe projetos__links-icons" ></i>
                            
                            <span className='projetos__links-icons-subtitle'>Acesse</span>
                        </a>
                    </div>)}
            </div>
        </div>
    )
}
export default ProjetoItens