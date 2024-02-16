Feature: Ecommarce web site - Automation Exercise

    # Scenario: sign up new user
    #     Given Open Practice Automation - Sign up page
    #     And Fill the infomarton for create new User
    #     Then Validates the User created message


    Scenario Outline: Scenario Outline name: sign up new user
        Given Open Practice Automation - Sign up page for index "<index>"
        And Fill the infomarton for create new User
        Then check for user login

        Examples:
            | index |
            | 0     |
            | 1     |
            | 2     |