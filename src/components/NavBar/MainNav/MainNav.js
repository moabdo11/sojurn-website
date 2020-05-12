import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux'
import { signOut } from '../../../store/Actions/authActions';


// import './styles.scss';

const MainNav = props => {
   return (
      <ul className="right">
          <li><NavLink to='/directory'>Home</NavLink></li>
          <li onClick={props.closed}><NavLink to='/deck'>Deck</NavLink></li>
          <li onClick={props.closed}><NavLink to='/technical'>Technical</NavLink></li>
          <li><NavLink to='/financial'>Financial</NavLink></li>
          <li><NavLink to='/demo'>Demo</NavLink></li>
          <li><a onClick={props.signOut}>Log Out</a></li>
      </ul>
   );
};

const mapDispatchToProps = dispatch => {
    return {
        signOut: () => dispatch(signOut())
    }
}

export default connect(null, mapDispatchToProps)(MainNav);