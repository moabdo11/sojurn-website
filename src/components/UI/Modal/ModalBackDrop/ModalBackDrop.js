import React from 'react'

import './ModalBackDrop.scss'

const ModalBackDrop = props => (
    props.show ? <div className="ModalBackDrop" onClick={props.clicked}></div> : null
);

export default ModalBackDrop;