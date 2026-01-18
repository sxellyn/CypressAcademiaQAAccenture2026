import { Given } from "cypress-cucumber-preprocessor/steps";
import Catalog from "../pages/coffeeCatalog.page";

Given("I access the Coffee Cart home page", () => {
  Catalog.visit();
});
