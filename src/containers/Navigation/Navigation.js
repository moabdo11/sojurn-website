import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux';

import FormBox from '../../components/UI/FormBox/FormBox';
import Login from '../../containers/Login';
import Modal from '../../components/UI/Modal/Modal';
import NavBar from '../../components/NavBar/NavBar';

import DrawerToggle from '../../components/NavBar/SideDrawer/DrawerToggle/DrawerToggle';
import SideDrawer from '../../components/NavBar/SideDrawer/SideDrawer';



class Navigation extends Component {
    state = {
        LoggingIn: false,
        loaded: false
     }


  authClosed = () => {
      const { auth } =this.props
    if (auth.uid) {this.setState({
        LoggingIn: false
    })
  }}

    render() {
        
        return (
            <Fragment>
                <NavBar loggedIn={this.state.LoggingIn} open={this.LogInHandler} />
                <DrawerToggle loggedIn={this.state.LoggingIn} clicked={this.props.drawerToggleClicked} />
              
                <Modal show={this.state.LoggingIn} modalClosed={this.CloseHandler}>
                    <FormBox
                    loggedIn={this.state.loggedIn}
                    close={this.CloseHandler} >
                        <Login authClosed={this.CloseHandler}  />
                    </FormBox>
                    
                </Modal>
            </Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
      auth: state.firebase.auth
    }
  }
  
  
  export default connect(mapStateToProps)(Navigation);



