import React from "react";
import { HashRouter as Router, Link ,Routes ,Route } from "react-router-dom";

import Home from "./components/Home";
import Movies from "./components/Movies"
import Admin from "./components/Admin"

export default function App() {
  return (
    <Router>
      <div className="container">
        <div className="row">
          <h1 className="mt-3">Go Watch a Movie!</h1>
          <hr className="mb-3"></hr>
        </div>
        <div className="row">
          <div className="col-md-2">
            <nav>
              <ul className="list-group">
                <li className="list-group-item">
                  <Link to="/" >Home</Link>
                </li>
                <li className="list-group-item">
                <Link to="/movies" >Movies</Link>
                </li>
                <li className="list-group-item">
                <Link to="/admin" >Manage Catalog</Link>
                </li>
              </ul>
            </nav>
          </div> 
          <div className="col-md-10">
            <Routes>
              <Route path="/" element={<Home />}>
              </Route>
              <Route path="/movies" element={<Movies/>}>
              </Route>
              <Route path="/admin" element={<Admin/>}></Route>
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}