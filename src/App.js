import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Bitcoin from "./Bitcoin";
import Apple from "./Apple";
import Business from "./Business";
import Entertainment from "./Entertainment";
import General from "./General";
import HeadlinesIndia from "./HeadlinesIndia";
import HeadlinesUS from "./HeadlinesUS";
import Technology from "./Technology";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/bitcoin" component={Bitcoin} />
        <Route exact path="/apple" component={Apple} />
        <Route exact path="/entertainment" component={Entertainment} />
        <Route exact path="/general" component={General} />
        <Route exact path="/business" component={Business} />
        <Route exact path="/headlines-in" component={HeadlinesIndia} />
        <Route exact path="/headlines-us" component={HeadlinesUS} />
        <Route exact path="/" component={Technology} />
      </Switch>
    </Router>
  );
}

export default App;
