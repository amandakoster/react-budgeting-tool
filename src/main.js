<<<<<<< HEAD
import './style/main.scss';
=======
import './style/app.scss';
>>>>>>> 94fd5d1c4e5a6a77f26b64028356ae6f967056e2

import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import ReactDom from 'react-dom';
import Navbar from './components/Navbar';
import Expenses from './components/Expenses';
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';

//import  store- create instance - wrap root with providcer

let renderIf = (test, component) =>  test ? component : undefined;

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      budget: 0,
      expenses: [],
      showErrors: true,
    };

    this.updateTheBudget = this.updateTheBudget.bind(this);
    this.app = this.app.bind(this);
  }

  componentDidMount() {
    console.log(this.state, '__STATE__');
  }

  updateTheBudget(budget){
    this.setState({budget});
  }

  app() {
    return{
      state: this.state,
      setState: this.setState.bind(this),
      showErrors: true,
    };
  }

  render() {
    return (

      <div>

        <Header appTitle="$ React Budget Tool" />
        <Navbar />
        <main className='mainApp'>
          <Route exact path='/' component={Home} />
          <Route exact path='/expenses' component={() => <Expenses handler={this.updateTheBudget} app={this.app()}/>} /> 
        </main>
  

        <Footer> <p> &copy; 2017 Amanda Koster</p></Footer>
      </div>
 
    );
  }
}

ReactDom.render(<BrowserRouter><App/></BrowserRouter>, document.getElementById('root'));