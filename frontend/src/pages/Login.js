import React, { Component } from 'react';

import twitterlogo from '../twitter.svg'
import "./Login.css";

export default class Login extends Component {
    render() {
        return (
            <div className="login-wrapper">
                <img src={twitterlogo} alt="GoTwitter" />
                <form>

                    <input placeholder="Nome de usuário" />
                    <button type="submit">Entrar</button>

                </form>
            </div>

        )
    }
}
