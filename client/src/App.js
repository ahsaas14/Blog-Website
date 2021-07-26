//import logo from './logo.svg';
import React from 'react';
import {Box} from '@material-ui/core';
import{BrowserRouter, Switch, Route} from 'react-router-dom';
//import './App.css';

//Components
import Header from'./components/Header';
import Home from'./components/home/Home';
import DetailView from './components/home/post/DetailView';
import CreateView from './components/home/post/CreateView';
import UpdateView from './components/home/post/UpdateView';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Box style={{marginTop:66}}>
        <Switch>
       <Route exact path='/' component={Home}/>
       <Route exact path='/details' component={DetailView}/>
       <Route exact path='/create' component={CreateView}/>
       <Route exact path='/update' component={UpdateView} />
       </Switch>
       </Box>
    </BrowserRouter>
    
    
    
  );
}

export default App;
