Feature: Ecommarse site -Orange HRM

    Scenario: Login with valid Orange HRM Credentials
        Given visit Orange HRM site
        When Enter Username and Password
        And Click on Login button
        Then validate the "Dashboard"
@focus
Scenario: Login with Invalid Orange HRM Credentials
        Given visit Orange HRM site
        When Enter invalid Username and Password
        And Click on Login button
        Then validate the Error