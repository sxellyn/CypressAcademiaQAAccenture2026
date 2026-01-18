import { When, And } from "cypress-cucumber-preprocessor/steps";
import Catalog from "../pages/coffeeCatalog.page";

When("I select 3 different coffees", () => {
  Catalog.addDifferentCoffeesToCart(3);
});

And("I accept the promo offer", () => {
  Catalog.acceptMochaPromo();
});

And("I navigate to the cart", () => {
  Catalog.goToCart();
});
