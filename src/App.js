import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from './hoc/Layout';
import BackDrop from './components/UI/BackDrop/BackDrop';
import Home from './containers/Home';

import PitchDeck from './components/PitchDeck/PitchDeck';
import Technical from './components/Technical/Technical';
import Financial from './components/Financial/Financial';
import Video from './components/Video/Video';


import './App.scss';
import Directory from './components/Directory/Directory';

class App extends Component {
  
  render() {
    
    return (
      
        <Layout>
          <BackDrop />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/directory" component={Directory} />
            <Route path="/deck" component={PitchDeck} />
            <Route path="/technical" component={Technical} />
            <Route path="/financial" component={Financial} />
            <Route path="/demo" component={Video} />
          </Switch>  
        </Layout>
    )
  }
}

export default App;