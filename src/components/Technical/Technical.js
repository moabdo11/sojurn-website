import React from 'react';
import { connect } from 'react-redux';
import technicalPdf from '../../assets/PDFs/Sojurn_Tech.pdf'

import { Redirect } from 'react-router-dom';


const Technical = props => {
    const  { auth } = props;
          if (!auth.uid) return <Redirect to='/'/>
    return (
        <object
            data={technicalPdf}
            type="application/pdf"
            style={{minHeight: '100vh'}}
            width="100%"
            height="100%">
        </object>  
  );
};

const mapStateToProps = state => {
    console.log(state);
    return {
      auth: state.firebase.auth
    }
  }
  
  
export default connect(mapStateToProps)(Technical);