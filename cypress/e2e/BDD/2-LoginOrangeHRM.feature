Feature: I Want to login into the site orangeHRM with valid data

    Background: Navigate to the orangeHRM Website
        Given I navigate to the orangeHRM Website

    Scenario: Login as new  user with valid data
        When I entered valid login credential
            | Username   | Password  |  
            | Admin      | admin123  |
           
            
        And User click on Login button
        Then Validate the title after login orangeHRM


