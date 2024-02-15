Feature: Google Page

    Scenario: Opening search engine page
    Given I open Google Page
    When I see "Google" in the title
    Then I see "google" in url
