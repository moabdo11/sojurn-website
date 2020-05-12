import React from 'react';
import loginImg from '../../../assets/Images/login.svg';
import './FormBox.scss'

const FormBox = props => (
    <div className="base-container">
        <div className="header">Login</div>
        <button onClick={props.close} type="button" className="modal-close">X</button>
        <div className="content">
          <div className="image">
            <img src={loginImg} alt="login" />
            {props.children}
          </div>
        </div>
      </div>
);

export default FormBox;

