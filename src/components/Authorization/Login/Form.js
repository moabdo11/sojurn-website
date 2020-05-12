import React from 'react'

import './Form.scss';


const LoginForm = props => {
    return (<form onSubmit={props.onLoginSubmit}  className="form">
        <div className="form-group">
            <label htmlFor="username">Your email</label>
            <div className="input-container">
                <input
                    type="email" 
                    id="email"
                    name="email"
                    onChange={props.changed}
                    placeholder="email" />
                    <i className="zmdi zmdi-email zmdi-hc-lg"></i>
            </div>
        </div>
        <div className="form-group">
            <label htmlFor="password">Your Password</label>
            <div className="input-container">
                <input 
                    type="password" 
                    id="password"
                    name="password"
                    onChange={props.changed}
                    placeholder="password"/>
                <i className="zmdi zmdi-lock zmdi-hc-lg"></i>
            </div>
        </div>
        <div className="white-text center">
            { props.authError? <p>{props.authError}</p> : null}
        </div>
        <div className="footer">
          <button
            className="btn"
           >
            Login
          </button>
        </div>
    </form>);
};

export default LoginForm;

