import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import MenuItem from './MenuItem/MenuItem';
import './Directory.scss';

class Directory extends Component {

    constructor () {
        super();
        this.state = {
            sections: [
                {
                  title: 'Pitch Deck',
                  number: '01',
                  id: 1,
                  linkUrl: '/deck'
                },
                {
                  title: 'technical',
                  number: '02',
                  id: 2,
                  linkUrl: '/technical'
                },
                {
                  title: 'financial',
                  id: 3,
                  number: '03',
                  size: 'large',
                  linkUrl: '/financial'
                },
                {
                    title: 'Watch Demo',
                    id: 4,
                    number: '04',
                    size: 'large',
                    linkUrl: '/demo'
                  }]
            }
         }


         render () {

          const  { auth } = this.props;
          if (!auth.uid) return <Redirect to='/'/>
             return (
                  <div className='container'>
                   
                    {
                        this.state.sections.map(({id, ...otherSectionProps }) => (
                         
                             <MenuItem key={id} {...otherSectionProps} history={this.props.history} />
                         
                        ))
                    }
                </div>
               
             )
         }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    auth: state.firebase.auth
  }
}


export default connect(mapStateToProps)(Directory);