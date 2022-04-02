import React, { useState } from "react";
import './App.css';
import { NavMenu } from '../NavMenu/NavMenu';
import { Hero } from "../Hero/Hero";

export const App = () => {
    const [ userEmail, setUserEmail ] = useState('Insira seu email');

    const emailSubscribe = (emailAddess) => {
        setUserEmail(emailAddess);
        alert('subscribed!')
    }

    const content = {
        smallHeader: 'Sua casa com as',
        bigHeader: 'melhores plantas',
        deck: 'Encontre aqui uma vasta seleção de plantas para decorar a sua casa e torná-lo uma pessoa mais feliz no seu dia a dia. Entre com seu e-mail e assine nossa newsletter para saber das novidades da marca.',
    }
    return(
        <div className="container">
            <div className="vector-bg"></div>
            <NavMenu />
            <main>
                <Hero content={content} emailSubscribe={emailSubscribe} userEmail={userEmail}/>
            </main>
        </div>
    )
}