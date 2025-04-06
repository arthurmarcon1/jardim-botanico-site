import React from "react";
import SobreIntro from "../components/sobre/SobreIntro";
import SobreVisitaçao from "../components/sobre/SobreVisitaçao";
import SobreRegras from "../components/sobre/SobreRegras";


const Sobre = () => {
    return (
        <div>
            <SobreIntro></SobreIntro>
            <SobreVisitaçao></SobreVisitaçao>
            <SobreRegras></SobreRegras>
        </div>
    );
};

export default Sobre;
