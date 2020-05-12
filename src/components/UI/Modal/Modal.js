import React from 'react'

import './Modal.scss'
import Aux from '../../../hoc/Aux';
import ModalBackDrop from '../../UI/Modal/ModalBackDrop/ModalBackDrop';

const Modal = (props) => (
    <Aux>
        <ModalBackDrop show={props.show} clicked={props.modalClosed} />
        <div className="Modal"
            style={{
                transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                opacity: props.show ? '1' : '0'
            }}>
            {props.children}
        </div>
    </Aux>
   
);

export default Modal