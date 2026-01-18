const COFFEE_SELECTOR = '[data-test="coffee_type"]';
const TOTAL_PRICE = '[data-test="checkout"]';
const PROMO_POPUP = ".promo";
const YES_BUTTON = ".yes";
const CART_LINK = '[href="/cart"]';
const SUCCESS_MESSAGE = ".snackbar.success";

const EXPECTED_TOTAL_ALIAS = "expectedTotal"
const EXPECTED_COFFES_ALIAS = "expectedCoffees"

class Catalog {
  visit() {
    cy.visit("/");
  }

  addCoffeeToCart(name) {
    cy.get(
      COFFEE_SELECTOR.replace("coffee_type", name.replace(" ", "_"))).click();
  }

  addDifferentCoffeesToCart(amountOfCoffees) {
    cy.fixture("coffees").then((coffees) => {
      let totalPrice = 0;
      const selectedCoffees = Object.entries(coffees).slice(0, amountOfCoffees);

      selectedCoffees.forEach(([coffeeName, coffeePrice]) => {
        this.addCoffeeToCart(coffeeName);
        totalPrice += coffeePrice;
      });

      this.validateTotalPrice(totalPrice);
      cy.wrap(totalPrice).as(EXPECTED_TOTAL_ALIAS);
      cy.wrap(selectedCoffees).as(EXPECTED_COFFES_ALIAS);
    });
  }

  validateTotalPrice(price) {
    cy.get(TOTAL_PRICE).should("have.text", `Total: $${price}.00`);
  }

  acceptMochaPromo() {
    cy.get(PROMO_POPUP).contains("It's your lucky day! Get an extra cup of Mocha for $4.").should("be.visible");

    cy.get(PROMO_POPUP).find(YES_BUTTON).should("have.text", "Yes, of course!").click();

    cy.get(`@${EXPECTED_TOTAL_ALIAS}`).then((total) => {
      const newTotal = total + 4;
      cy.wrap(newTotal).as(EXPECTED_TOTAL_ALIAS);
      this.validateTotalPrice(newTotal);
    });

    cy.get(`@${EXPECTED_COFFES_ALIAS}`).then((oldList) => {
      const newList = oldList.concat([["(Discounted) Mocha", 4]]);
      cy.wrap(newList).as(EXPECTED_COFFES_ALIAS);
    });
  }

  goToCart() {
    cy.get(CART_LINK).should("be.visible").click();
  }

  validateSuccessfulPurchase() {
    cy.get(SUCCESS_MESSAGE).should("be.visible").and("have.text","Thanks for your purchase. Please check your email for payment.");
  }
}

export default new Catalog();
