import React from "react";
import "./ScrollUp.css";

const ScrollUp = () => {
    window.addEventListener("scroll", function () {
        const scrollUp = document.querySelector(".scrollup");

        if (this.scrollY >= 545) scrollUp.classList.add("show-scroll");
        else scrollUp.classList.remove("show-scroll");
    })

    return (
            <a href="#" className="scrollup scroll-content">
                <i className="uil uil-arrow-up scrollup-icon  scroll-content"></i>
            </a>        
    )
}
export default ScrollUp;