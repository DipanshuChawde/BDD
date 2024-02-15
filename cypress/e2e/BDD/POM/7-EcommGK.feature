Feature: Ecommerce GreenKartGK

    Scenario Outline: EcommerceGK product delivery
        Given open ecommerseGK GreenKart
        When serch products starts with "<startCh>"
        And add product to cart '<prod>' in cart
        When place your order and select country
        Then validate for thankyou message
 
        Examples:
            | startCh | prod    |
            | ca      | Cashews |
            | br      | Brinjal |