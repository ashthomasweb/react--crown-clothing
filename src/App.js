import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";

import HomePage from "./pages/homepage/home.component";
import ShopPage from "./pages/shop/shop.component";
import SignInUpPage from "./pages/signinuppage/signinuppage.component";
import Header from './components/header/header.component'
import { auth, createUserProfileDocument } from './firebase/firebase.utils'
import CustomButton from "./components/custom-button/custom-button.component"

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
    // auth is object from firebase method, onAuthStateChanged is a subscription watcher 
    // userAuth is the object returned
    auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth)

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          }, () => {
            console.log(this.state)
          })
        })
      } else {
        this.setState({ currentUser: userAuth })
      }
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
