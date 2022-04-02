import React from "react";
import {SubscribeForm} from "../SubscribeForm/SubscribeForm";
import './Hero.css';

export const Hero = ({content, emailSubscribe, userEmail}) => {
    return(
        <section className="hero">
            <h1 className="hero-header">
                <span className="small-header">{content.smallHeader}</span>
                {content.bigHeader}
            </h1>
            <p className="hero-deck">{content.deck}</p>
            <SubscribeForm onSubmit={emailSubscribe} value={userEmail}/>
        </section>
    )
}