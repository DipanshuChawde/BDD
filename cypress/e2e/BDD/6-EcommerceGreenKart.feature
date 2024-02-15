Feature: Ecommerce GreenKart

    Scenario: Ecommerce product delivery
    Given open ecommerse GreenKart
    When serch product starts with ca 
    And add to cart cashews in cart
    When place order and select country 
    Then validate thankyou message