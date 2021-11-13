import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { createUser } from '../services/userAPI';
import LoadingUser from './LoadingUser';

// Para resolver as falhas da minha lógica consultei o código do colegas Guilherme Augusto e Fernanda Andrade.

class Login extends Component {
  constructor() {
    super();
    this.state = {
      userInput: '',
      isLoaded: false,
      isLoading: false,
      isButtonDisabled: true,
    };
  }

  changeInput = ({ target: { value } }) => {
    this.setState({ userInput: value }, () => { this.ableButton(); });
  };

  onClicked = () => {
    const { userInput } = this.state;
    this.setState({ isLoading: true });
    createUser({ name: userInput })
      .then(() => this.setState({ isLoaded: true, isLoading: false }));
  }

  ableButton = () => {
    const MINsTRING = 3;
    const { userInput } = this.state;
    if (userInput.length < MINsTRING) {
      this.setState({ isButtonDisabled: true });
    } else {
      this.setState({ isButtonDisabled: false });
    }
  }

  render() {
    const {
      userInput,
      isLoaded,
      isLoading,
      isButtonDisabled,
    } = this.state;

    const makeLogin = (
      <div data-testid="page-login">
        <span>Login</span>
        <form action="login" method="GET">
          <fieldset>
            <label htmlFor="userInput">
              Nome:
              <input
                value={ userInput }
                onChange={ this.changeInput }
                type="text"
                name="userName"
                id="userName"
                data-testid="login-name-input"
                placeholder="Digite o seu nome"
                minLength="3"
                // não desabilita o button, mas se eu quiser deixar o button abilitado direto posso usar isso como lembrete pro user.
              />
            </label>
            <button
              data-testid="login-submit-button"
              type="submit"
              disabled={ isButtonDisabled }
              onClick={ this.onClicked }
            >
              Entrar
            </button>
          </fieldset>
        </form>
      </div>
    );

    return (
      <div>
        { isLoading ? <LoadingUser /> : makeLogin }
        { isLoaded && <Redirect to="/search" /> }
      </div>
    );
  }
}

export default Login;
