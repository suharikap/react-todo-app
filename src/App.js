import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Todo from "./Pages/todo";
import Help from "./Pages/help";
import { Navbar, Nav } from "react-bootstrap";

export default function App() {
  return (
    <Router>
      <Navbar bg="light" expand="lg" >
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/home" >Todo</Nav.Link>
            <Nav.Link href="/help">Help</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Switch>
        <Route exact path="/home">
          <Todo />
        </Route>
        <Route path="/help">
          <Help />
        </Route>
      </Switch>
    </Router>
  );
}
