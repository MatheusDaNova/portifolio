/*import React from "react";
import{ Data } from "./Data";
import "./Depoimentos.css"; 

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";

const Depoimentos = () => {
    return (
        <section className="depoimentos container section" id="#Depoimentos" >
            <h2 className="section__title">Depoimentos</h2>
            <span className="section__subtitle">Veja o que meus clientes já disseram sobre meu trabalho</span>


            <Swiper className="depoimentos__container"
                modules={[Pagination]}
                loop = {true}
                grabCursor={true}
                spaceBetween={24}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    576: {slidesPerView:2,
                    },
                    768:{
                        slidesPerView:2,
                        spaceBetween:48,
                    },
                }}
                >
                {Data.map(({id, image, title, description}) =>{
                    return(
                        <SwiperSlide key={id} className="depoimentos__card">
                            <img src={image} alt="" className="depoimentos__img"/>

                            <h3 className="depoimentos__name">{title}</h3>
                            <p className="depoimentos__descripition">{description}</p>
                        </SwiperSlide>
                    )}
                )}   
            </Swiper>
        </section>
    )
}

export default Depoimentos;
*/