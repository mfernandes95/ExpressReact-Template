import React from "react";
import ReactDOM from "react-dom";
import { Router, Switch } from "react-router-dom";

import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import "config/ReactotronConfig";

import { store, persistor } from "store";
import Route from "routes/Route";
import history from "services/history";
// core components
import Admin from "layouts/Admin.js";
import RTL from "layouts/RTL.js";
import InitialPage from "views/InitialPage/index";
import ResetPassword from "views/Passwords/ResetPasswords/index";

import "assets/css/material-dashboard-react.css?v=1.8.0";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={InitialPage} />
          <Route path="/senha/:tokens" component={ResetPassword} />
          <Route path="/admin" component={Admin} isPrivate />
          <Route path="/rtl" component={RTL} isPrivate />
        </Switch>
      </Router>
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
