const NAME = "#name";
const EMAIL = "#email";
const DELETE_BUTTON = ".delete";
const CART_ITEM = "div:not(.pay-container) > ul > .list-item";
const SUBMIT_BUTTON = "#submit-payment";
const PAYMENT_DETAILS_MODAL = ".modal > div";
const CHECKOUT_BUTTON = '[data-test="checkout"]';

const EXPECTED_TOTAL_ALIAS = "expectedTotal"
const EXPECTED_COFFES_ALIAS = "expectedCoffees"

class Cart {
  validateCoffesInCartAndTotalPrice() {
    cy.get(`@${EXPECTED_COFFES_ALIAS}`).then((coffees) => {
      let total = 0;

      coffees.forEach(([name, price]) => {
        cy.contains(CART_ITEM, name).should("exist");
        cy.contains(CART_ITEM, name).contains(`$${price}.00`).should("exist");
        total += price;
      });

      cy.get(`@${EXPECTED_TOTAL_ALIAS}`).then((expectedPrice) => {
        cy.get(CHECKOUT_BUTTON).should("have.text",`Total: $${expectedPrice}.00`);
      });
    });
  }

  deleteCoffeeByName(coffee) {
    cy.contains(CART_ITEM, coffee).find(DELETE_BUTTON).should('be.visible').click();

    cy.get(`@${EXPECTED_COFFES_ALIAS}`).then((coffees) => {
      const removed = coffees.find(([name]) => name === coffee);
      const updatedCoffees = coffees.filter(([name]) => name !== coffee);
      cy.wrap(updatedCoffees).as(EXPECTED_COFFES_ALIAS);

      const removedPrice = removed[1];
      cy.get(`@${EXPECTED_TOTAL_ALIAS}`).then((total) => {
        cy.wrap(total - removedPrice).as(EXPECTED_TOTAL_ALIAS);
      });
    });
  }

  fillPaymentsDetailsAndCheckout() {
    cy.get(CHECKOUT_BUTTON).should('be.visible').click();
    cy.get(PAYMENT_DETAILS_MODAL).should("be.visible");
    cy.get(NAME).type(Cypress.env("name"));
    cy.get(EMAIL).type(Cypress.env("email"));
    cy.get(SUBMIT_BUTTON).click();
  }
}

export default new Cart();
