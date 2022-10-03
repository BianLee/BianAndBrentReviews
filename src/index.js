import React from 'react';
import {render} from 'react-dom';
import ReactDOM from 'react-dom/client';
import App from './App';
import About from "./About";
import Films from "./Films";
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

      <Route path="/films/the-social-network"><Films title="The Social Network" bianscore={9} brentscore={8}/></Route>
      <Route path="/films/catch-me-if-you-can"><Films title="Catch Me If You Can" bianscore={8} brentscore={8.5}/></Route>
      <Route exact path="/"><App/></Route>
      <Route exact path="/about"><About/></Route>
      </Switch>
    </BrowserRouter>,
    rootElement
  );
  