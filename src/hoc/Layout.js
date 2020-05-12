import React, { Component } from 'react';
import { connect } from 'react-redux';

import NavBar from '../components/NavBar/NavBar';
import SideDrawer from '../components/NavBar/SideDrawer/SideDrawer'

import FormBox from '../components/UI/FormBox/FormBox';
import Login from '../containers/Login';
import Modal from '../components/UI/Modal/Modal';

import Aux from './Aux';

class Layout extends Component {

   state = {
      LoggingIn: false,
      showSideDrawer: false,
      isActive: false
   }

   sideDrawerClosedHandler = () => {
      this.setState({showSideDrawer: false});
   }

   sideDrawerToggleHandler = () => {
      this.setState(( prevState ) => {
        return { showSideDrawer: !prevState.showSideDrawer }
      });
   }

   LogInHandler = () => {
      this.setState({LoggingIn: true})
  }

  CloseHandler = () => {
       this.setState({
           LoggingIn: false
       })
  }

      authClosed = () => {
      const { auth } =this.props
    if (auth.uid) {this.setState({
        LoggingIn: false
    })
  }}

  showToggleNav = () => {
   this.setState({isActive: true });
}

   render() {
      return (
         <Aux>
            {/* <Navigation drawerToggleClicked={this.sideDrawerToggleHandler} open={this.LogInHandler} /> */}
            <NavBar
               closedSidedrawer={this.sideDrawerClosedHandler}
               isActive={this.state.isActive}
               toggleClass={this.showToggleNav} 
               drawerToggleClicked={this.sideDrawerToggleHandler}
               loggedIn={this.state.LoggingIn} 
               openLogin={this.LogInHandler}  />
            <SideDrawer 
               openLogin={this.LogInHandler}
               loggedIn={this.state.LoggingIn} 
               open={this.state.showSideDrawer} 
               closed={this.sideDrawerClosedHandler} />
            <Modal show={this.state.LoggingIn} modalClosed={this.CloseHandler}>
                  <FormBox
                     loggedIn={this.state.loggedIn}
                     close={this.CloseHandler} >
                     <Login authClosed={this.CloseHandler} drawerToggleClicked={this.sideDrawerToggleHandler}  />
                  </FormBox>
            </Modal>
            <main className="app wrapper">
               {this.props.children}
            </main>
         </Aux>
      );
   }
}

const mapStateToProps = state => {
   return {
     auth: state.firebase.auth
   }
 }
 
 
 export default connect(mapStateToProps)(Layout);
