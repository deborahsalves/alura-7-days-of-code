import React from "react";
import mainLogo from '../../images/logo.png';
import styled from 'styled-components';

const MainMenu = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 1200px;
    height: 48.84px;
    margin: 0 auto;
    margin-top: 10.16px;
    margin-bottom: 43px;
`;
const MainLogo = styled.img`
    width: 177px;
    height: 44.84px;
`;
const Nav = styled.nav`
    display: inline-flex;
    flex-direction: row;
    justify-content: flex-end;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    color: #202020;
`;

const MainNav = styled.ul`
    display: inline-flex;
    flex-direction: row;
    justify-content: space-around;
`;

const NavItem = styled.li`
    list-style: none;
    
    &::after {
        content: "/";
        padding: 0 16px;
    }
`;

const NavKart = styled.li`
    list-style: none;
    padding: 0 16px;
`;

export const NavMenu = () => {
    return(
        <MainMenu className="main-menu">
            <MainLogo className="main-logo" src={mainLogo} alt="Logo Casa Verde" title="Voltar para a home" />
            <Nav className="nav">
                <MainNav className="main-nav">
                    <NavItem>Como fazer</NavItem>
                    <NavItem>Ofertas</NavItem>
                    <NavItem>Depoimentos</NavItem>
                    <NavItem>Vídeos</NavItem>
                </MainNav>
                <MainNav className="kart-nav">
                    <NavKart>Meu carrinho</NavKart>
                </MainNav>
            </Nav>
        </MainMenu>
    )
}