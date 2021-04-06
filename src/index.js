import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createStore, applyMiddleware } from "redux";
import { houseReducer } from "./redux/reducers";
import { Provider } from "react-redux";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import thunk from "redux-thunk";
import Houses from "./containers/houses";
import House from "./components/house";
import AddHouse from "./containers/addHouse";

const store = createStore(houseReducer, applyMiddleware(thunk));

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <Switch>
          <Route
            path="/houses/add"
            render={(props) => <AddHouse {...props} />}
          />
          <Route path="/houses/:id" render={(props) => <House {...props} />} />
          <Route path="/houses">
            <Houses />
          </Route>
          <Route path="/">
            <App />
          </Route>
        </Switch>
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
