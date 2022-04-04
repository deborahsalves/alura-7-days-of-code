import React from "react";
import {SubscribeForm} from "../SubscribeForm/SubscribeForm";
import styled from "styled-components";

const HeroSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 1200px;
    height: 748px;
    margin: 0 auto;
    background-image: url(../../images/imagem-hero1.png);
    background-position: 460px 60px;
    background-repeat: no-repeat;
    background-size: contain;
    overflow: hidden;
`;
const HeroHeader = styled.h1`
    width: 40%;
    font-family: 'Elsie Swash Caps';
    font-style: normal;
    font-weight: 900;
    font-size: 82px;
    line-height: 94px;
    color: #202020;
    margin: 0;
    margin-bottom: 24px;
`;
const SmallHeader = styled.span`
    display: block;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
    line-height: 27px;
    color: #202020;
    opacity: 0.5;
    margin-bottom: 12px;
`;
const HeroDeck = styled.p`
    width: 40%;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 26px;
    color: #202020;
    opacity: 0.5;
    margin-bottom: 36px;
`;

export const Hero = ({content, emailSubscribe, userEmail}) => {
    return(
        <HeroSection className="hero">
            <HeroHeader className="hero-header">
                <SmallHeader className="small-header">{content.smallHeader}</SmallHeader>
                {content.bigHeader}
            </HeroHeader>
            <HeroDeck className="hero-deck">{content.deck}</HeroDeck>
            <SubscribeForm onSubmit={emailSubscribe} value={userEmail}/>
        </HeroSection>
    )
}