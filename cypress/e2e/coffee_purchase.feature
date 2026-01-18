#utf-8
#language: en

Feature: CoffeeCart.app

  Scenario: Checkout successfully with 3 coffees applying mocha promotion
    Given I access the Coffee Cart home page
    When I select 3 different coffees
    And I accept the promo offer
    And I navigate to the cart
    Then the cart should contain 4 items with correct values
    When I remove 1 item from the cart
    Then the cart should contain 3 items with correct values
    When I provide valid customer information and checkout successfully
    Then I should see the success message