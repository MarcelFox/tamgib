import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import About from "@Domain/example/components/About";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/about">
          <About />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
