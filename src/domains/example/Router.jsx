import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import About from "@Domain/example/components/About";
import PageNotFound from "@Domain/example/components/PageNotFound";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
      <Route exact path="/">
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route path="*">
          <PageNotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
