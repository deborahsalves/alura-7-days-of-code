import React, { useState } from "react";
import styled from 'styled-components';

const Form = styled.form`
    display: flex;
    flex-flow: row;
    width: 50%;
`;
const FormInput = styled.input`
    display: inline;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    color: #202020;
    opacity: 0.3;
    padding: 24px;
    background: #FFFFFF;
    border: 0;
    box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.06);
`;
const FormSubmitButton = styled.button`
    display: inline-flex;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    align-items: center;
    text-align: center;
    color: #FFFFFF;
    padding: 24px;
    background: #FFCB47;
    border: 0;
    box-shadow: 10px 10px 30px rgba(255, 203, 71, 0.3);
    cursor: pointer;
    &:hover {
        background: #FFDC58;
        color: #202020;
    }
`;

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
        <Form className="subscribe-form" onSubmit={handleSubmit}>
            <FormInput className="subscribe-input" onChange={handleChange} value={userInput} placeholder="Insira seu email" type="email" />
            <FormSubmitButton className="subscribe-submit" type="submit">Assinar newsletter</FormSubmitButton>
        </Form>
    )
}