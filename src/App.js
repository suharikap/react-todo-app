import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route /*Link*/,
} from "react-router-dom";
import Todo from "./Pages/todo";
import Form from "./Pages/Form";
import Help from "./Pages/help";
import Item from "./Pages/Item";
import SignupForm from "./Pages/Formik";
import { Navbar, Nav } from "react-bootstrap";
import { Provider } from "react-redux";
import store from "./Store/configureStore";

export default function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar bg="light">
          <Nav className="mr-auto">
            <Nav.Link href="/">Todo</Nav.Link>
            <Nav.Link href="/item/:id">Item</Nav.Link>
            <Nav.Link href="/form">Form</Nav.Link>
            <Nav.Link href="/SignupForm">Formik</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="/help">Help</Nav.Link>
          </Nav>
        </Navbar>
        <Switch>
          <Route exact path="/" component={Todo}></Route>
          <Route exact path="/item/:id" component={Item}></Route>
          <Route path="/help">
            <Help />
          </Route>
          <Route path="/form">
            <Form />
          </Route>
          <Route path="/SignupForm">
            <SignupForm />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}
