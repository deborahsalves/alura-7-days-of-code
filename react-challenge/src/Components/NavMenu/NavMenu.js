import React from "react";
import './NavMenu.css';
import mainLogo from '../../images/logo.png';

export const NavMenu = () => {
    return(
        <header className="main-menu">
            <img className="main-logo" src={mainLogo} alt="Logo Casa Verde" title="Voltar para a home" />
            <nav className="nav">
                <ul className="main-nav">
                    <li>Como fazer</li>
                    <li>Ofertas</li>
                    <li>Depoimentos</li>
                    <li>Vídeos</li>
                </ul>
                <ul className="kart-nav">
                    <li>Meu carrinho</li>
                </ul>
            </nav>
        </header>
    )
}