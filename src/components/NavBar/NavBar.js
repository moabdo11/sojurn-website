import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import MainNav from './MainNav/MainNav';
import LandingNav from './LandingNav/LandingNav';
import DrawerToggle from '../NavBar/SideDrawer/DrawerToggle/DrawerToggle';



import './styles.scss';

const NavBar = props => {
   const { auth} = props;
   const links = auth.uid ? <MainNav {...props} /> : <LandingNav {...props} />;
      return (
      <Fragment>
         
           <div className="navbar-fixed">
           <DrawerToggle 
               toggleClass={props.toggleClass}
               clicked={props.drawerToggleClicked} />
            <nav className="nav-wrapper fill desktopOnly transparent">
            
               {links}
            </nav>
          </div>
      </Fragment>
    
   );
};

const mapStateToProps  = (state) => {
   return {
      auth: state.firebase.auth
   }
}

export default connect(mapStateToProps)(NavBar);