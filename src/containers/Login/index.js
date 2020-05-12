import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { logIn } from '../../store/Actions/authActions';
// import withAuth from 'hoc/WithAuth';

import LoginForm from '../../components/Authorization/Login/Form';
              

class Login extends Component {
   state = {
      email: '',
      password: ''
   }


   handleChange = (e) => {
       this.setState({
           [e.target.id]: e.target.value
           
       })
   }

   handleSubmit = (e) => {
       e.preventDefault();
       this.props.logIn(this.state);
    
      
   }

   render() {
    const  { auth } = this.props;
    if (auth.uid)  {
       this.props.authClosed()
      //  this.props.drawerToggleClicked()
       return <Redirect to='/directory'/>
      }

      return (
               <LoginForm
                  history={this.props.history}
                  onLoginSubmit={this.handleSubmit}
                  changed={this.handleChange}
                  authError={this.props.authError}
               />
      );
   }

  
}

const mapStateToProps = (state) => {
    return {
        authError: state.auth.authError,
        auth: state.firebase.auth
    }
}


const mapDispatchToProps = dispatch => {
   return {
      logIn: creds => dispatch(logIn(creds))
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
