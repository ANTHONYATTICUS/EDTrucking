import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router";
import "assets/scss/material-kit-pro-react.scss?v=1.3.0";

import SectionsPage from "views/SectionsPage/SectionsPage.jsx"
import AboutUsPage from "views/AboutUsPage/AboutUsPage.jsx";
import ComponentsPage from "views/ComponentsPage/ComponentsPage.jsx";
import ContactUsPage from "views/ContactUsPage/ContactUsPage.jsx";
import LandingPage from "views/LandingPage/LandingPage.jsx";
import PricingPage from "views/PricingPage/PricingPage.jsx";
import ProductPage from "views/ProductPage/ProductPage.jsx";
import ErrorPage from "views/ErrorPage/ErrorPage.jsx";

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/about-us" component={AboutUsPage} />
      <Route path="/components" component={ComponentsPage} />
      <Route path="/contact-us" component={ContactUsPage} />
      <Route path="/pricing" component={PricingPage} />
      <Route path="/product-page" component={ProductPage} />
      <Route path="/sections" component={SectionsPage} />
      <Route path="/error-page" component={ErrorPage} />
      <Route path="/" component={LandingPage} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
