import React, { Component } from 'react'
import NavBar from './components/NavBar'
import News from './components/News'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Footer from './components/Footer';


export class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <NavBar />
          <Switch>
            <Route exact path="/">
              <News key="general" pagesize={6} category="general" head="General News"/>
            </Route>
            <Route exact path="/business">
              <News key="business" pagesize={6} category="business" head="Business News"/>
            </Route>
            <Route exact path="/entertainment">
              <News key="entertainment" pagesize={6} category="entertainment" head="Entertainment News" />
            </Route>
            <Route exact path="/health">
              <News key="health" pagesize={6} category="health" head="Health News"/>
            </Route>
            <Route exact path="/science">
              <News key="science" pagesize={6} category="science" head="Science News"/>
            </Route>
            <Route exact path="/sports">
              <News key="sports" pagesize={6} category="sports" head="Sports News"/>
            </Route>
            <Route exact path="/technology">
              <News key="technology" pagesize={6} category="technology" head="Technology News"/>
            </Route>
          </Switch>
          <Footer /> 
        </Router>
      </div>
    )
  }
}

export default App

