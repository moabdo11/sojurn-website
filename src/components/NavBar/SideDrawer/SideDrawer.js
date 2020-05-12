import React from 'react';
import { connect } from 'react-redux';


import MainNav from '../MainNav/MainNav';
import LandingNav from '../LandingNav/LandingNav';
import ModalBackDrop from '../../UI/Modal/ModalBackDrop/ModalBackDrop';
import Aux from '../../../hoc/Aux';

import './SideDrawer.scss'

const sideDrawer = props =>  {
    let attachedClasses = ['SideDrawer', 'Close'];
    if (props.open) {
        attachedClasses = ['SideDrawer', 'Open'];
    }
    const links = props.auth.uid ? <MainNav /> : <LandingNav {...props} />;
    return (
    <Aux>
        <ModalBackDrop show={props.open} clicked={props.closed} />
        <div className={attachedClasses.join(' ')}>
            <nav className="transparent">
             
                {links}
                
            </nav>
        </div>
    </Aux>
    )  
    };

    const mapStateToProps  = (state) => {
        return {
           auth: state.firebase.auth
        }
     }
     
     export default connect(mapStateToProps)(sideDrawer);