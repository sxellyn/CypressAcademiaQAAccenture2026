import { When, Then } from "cypress-cucumber-preprocessor/steps";
import Cart from "../pages/coffeeCart.page";
import Catalog from "../pages/coffeeCatalog.page";

Then("the cart should contain 4 items with correct values", () => {
  Cart.validateCoffesInCartAndTotalPrice();
});

When("I remove 1 item from the cart", () => {
  Cart.deleteCoffeeByName("Espresso");
});

Then("the cart should contain 3 items with correct values", () => {
  Cart.validateCoffesInCartAndTotalPrice();
});

When("I provide valid customer information and checkout successfully", () => {
  Cart.fillPaymentsDetailsAndCheckout();
});

Then("I should see the success message", () => {
  Catalog.validateSuccessfulPurchase();
});
