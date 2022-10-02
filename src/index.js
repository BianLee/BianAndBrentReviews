import React from 'react';
import {render} from 'react-dom';
import ReactDOM from 'react-dom/client';
import App from './App';
import About from "./About";
import {
  BrowserRouter,
  Routes,
  Route,
  Switch
} from "react-router-dom";

  const rootElement = document.getElementById("root");
  render(
    <BrowserRouter>
     <Switch>

    
      <Route exact path="/"><App/></Route>
      <Route exact path="/about"><About/></Route>
      </Switch>
    </BrowserRouter>,
    rootElement
  );
  