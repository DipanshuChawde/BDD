Feature: Ecommerce site Paractice Automation

    Scenario: login Paractice Automation with valid Credentials
        Given visit Paractice Automation url
        When user login with Username and password
            | username        | password    |
            | sarika@test.com | @Minskole12 |
        And click on sign in button
        Then dashboard should be visible

    Scenario Outline: login multiple users with valid credentials
        Given visit Paractice Automation url
        When user login with <Username> and <Password>
        And click on sign in button
        Then dashboard should be visible

        Examples:
            | Username        | Password    |
            | sarika@test.com | @Minskole12 |
            | gauri@test.com  | 12Minskole@ |
            | Arjun@test.com  | Arjun@12    |


    Scenario Outline: login2 multiple users with valid credentials
        Given visit Paractice Automation url
        When users login with "<Username>" and "<Password>"
        And click on sign in button
        Then dashboard should be visible

        Examples:
            | Username        | Password    |
            | sarika@test.com | @Minskole12 |
            | gauri@test.com  | 12Minskole@ |
            | Arjun@test.com  | Arjun@12    |


    Scenario Outline: login3 multiple users with valid credentials
        Given visit Paractice Automation url
        When users are login with <Username> and <Password>
        And click on sign in button
        Then dashboard should be visible for <Credentials> Credentials

        Examples:
            | Username        | Password    | Credentials |
            | sarika@test.com | @Minskole12 | Valid       |
            | gauri@test.com  | 12Minskole@ | Valid       |
            | Arjun@test.com  | Arjun12     | Invalid     |       