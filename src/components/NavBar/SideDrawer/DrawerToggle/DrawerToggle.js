import React from 'react';
import { connect } from 'react-redux';

import './DrawerToggle.scss'

const drawerToggle = (props) => {
  let attachedClasses = ['hamburger'];
    if ( props.clicked === true ) {
        attachedClasses = ['hamburger', 'is-active'];
    }
  console.log(props.clicked)
    return (
    <div  
      onClick={props.clicked} 
      className="three col">
        <div className={attachedClasses.join(' ')} id="hamburger-9">
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>
      </div>
    )
};


const mapStateToProps  = (state) => {
  return {
     auth: state.firebase.auth
  }
}

export default connect(mapStateToProps)(drawerToggle);