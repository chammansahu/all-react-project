import React, { Component } from "react";
import { BrowserRouter as Router,  Route } from "react-router-dom";


import HomeScreen from "./projects/proshop/screens/HomeScreen";
import ProductScreen from "./projects/proshop/screens/ProductScreen";
import ProjectOne from "./projects/project1/ProjectOne";
import ProjectScreen from './ProjectScreen'
import RouterBasic from './projects/routerBasic/RouterBasic'
import PizzaHome from "./projects/pizza/screens/PizzaHome";
import TodoManager from "./projects/todo/TodoManger";
import ReduxExamples from "./projects/redux-examples/ReduxExamples";


export class App extends Component {
  render() {
    return (
      <Router>
        {/* <Header /> */}

        <Route exact path="/" component={ProjectScreen} />

        <Route path="/proshop" component={HomeScreen} />
        <Route path="/project1" component={ProjectOne} />
        <Route path="/products/:id" component={ProductScreen} />
        <Route path="/routerbasic" component={RouterBasic} />
        <Route path="/pizza" component={PizzaHome} />
        
        <Route path="/todo" component={TodoManager} />
       
        {/* <Route path="/" component={} /> */}
         <Route path="/redux" component={ReduxExamples} /> 

        {/* <Footer /> */}
      </Router>
    );
  }
}

export default App;
