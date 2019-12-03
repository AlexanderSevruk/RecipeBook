import React from "react";
import Search from "./SearchAPI/RecipeFetch";
import Navbar from "./Navbar";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import RecipeList from "./RecipeList";
import RecipeForm from "./RecipeForm";

const Routing = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Navbar} />
      <Route exact path="/create" component={RecipeForm} />
      <Route exact path="/search" component={Search} />
      <Route exact path="/archive" component={RecipeList} />
    </Switch>
  </Router>
);
export default Routing;
