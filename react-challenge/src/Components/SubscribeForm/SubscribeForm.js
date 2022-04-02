import React, { useState } from "react";
import './SubscribeForm.css';

export const SubscribeForm = (props) => {
    const [ userInput, setUserInput] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        props.onSubmit(userInput);
    }

    const handleChange = ({target}) => {
        let userEmail = target.value;
        console.log(userEmail)
        setUserInput(userEmail)
    }

    return(
        <form className="subscribe-form" onSubmit={handleSubmit}>
            <input className="subscribe-input" onChange={handleChange} value={userInput} placeholder="Insira seu email" type="email" />
            <button className="subscribe-submit" type="submit">Assinar newsletter</button>
        </form>
    )
}