import AboutUsPage from "views/AboutUsPage/AboutUsPage.jsx";
import ComponentsPage from "views/ComponentsPage/ComponentsPage.jsx";
import ContactUsPage from "views/ContactUsPage/ContactUsPage.jsx";
import LandingPage from "views/LandingPage/LandingPage.jsx";
import SectionsPage from "views/SectionsPage/SectionsPage.jsx";


var indexRoutes = [
  { path: "/about-us", name: "AboutUsPage", component: AboutUsPage },
  { path: "/components", name: "Components", component: ComponentsPage },
  { path: "/contact-us", name: "ContactUsPage", component: ContactUsPage },
  { path: "/landing-page", name: "LandingPage", component: LandingPage },
  { path: "/pricing", name: "PricingPage", component: PricingPage },
  { path: "/product-page", name: "ProductPage", component: ProductPage },
  { path: "/sections", name: "SectionsPage", component: SectionsPage },
];

export default indexRoutes;
