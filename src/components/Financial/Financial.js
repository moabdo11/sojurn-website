import React from 'react';
import { connect } from 'react-redux';
import financialPdf from '../../assets/PDFs/Sojurn_Financials.pdf'
import { Redirect } from 'react-router-dom';


const Financial = props => {
    const  { auth } = props;
          if (!auth.uid) return <Redirect to='/'/>
   return( <object
        data={financialPdf}
        type="application/pdf"
        style={{minHeight: '100vh'}}
        width="100%"
        height="100%">
    </object>
   )
};

const mapStateToProps = state => {
    console.log(state);
    return {
      auth: state.firebase.auth
    }
  }
  
  
export default connect(mapStateToProps)(Financial);