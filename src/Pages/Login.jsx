import React, { Component } from 'react';
import userAPI from '../services/userAPI';

class Login extends Component {
  render() {
    return (
      <div data-testid="page-login">
        <span>Login</span>

        <form action="login" method="GET">
          <fieldset>
            <label htmlFor="userName">
              Nome:
              <input
                value={ userName }
                onChange={ changeInput }
                type="text"
                name="userName"
                id="userName"
                data-testid="login-name-input"
                placeholder="Digite o seu nome"
                minLength="3"
              />
            </label>
            <button
              data-testid="login-submit-button"
              type="submit"
              disabled={ isButtonDisabled }
              onClick={ () => }
            >
              Entrar
            </button>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default Login;
