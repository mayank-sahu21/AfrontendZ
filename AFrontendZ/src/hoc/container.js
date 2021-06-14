import React, { Component } from "react";
import {createMemoryHistory} from 'history';
import { Route, Switch } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { routes } from "../routes";
import axios from 'axios';
import {ConnectedRouter} from 'connected-react-router';

const App = () => {
  
 const history = createMemoryHistory();
    return (
        <Switch>
          {routes.map((el, index) => {
            return (
              <Route
                path={el.path}
                exact
                component={el.component}
                key={index}
              ></Route>
            );
          })}
        </Switch>
    );
}

export default App;
