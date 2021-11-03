import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";

import HomePage from "./pages/homepage/home.component";
import ShopPage from "./pages/shop/shop.component";
import SignInUpPage from "./pages/signinuppage/signinuppage.component";
import Header from './components/header/header.component'
import { auth } from './firebase/firebase.utils'

const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
);

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      currentUser: null
    }

  }


  unsubscribeFromAuth = null
  
  componentDidMount() {
    // auth is user object received from firebase auth method
    auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user })

    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }


  render() {

    return (
      <div>
      <Header className='App-header' currentUser={this.state.currentUser}/>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path='/hats' component={HatsPage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={SignInUpPage} />
      </Switch>
      </div>
    );
  }
}

export default App;
