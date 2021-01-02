Feature: Performing Modal dialog operation in campaign website

    As many users, are going to load the 
    campaign url, We need to solidfy our
    backlinks and navigations

    Background:
        Given I open the url "https://www.volvocars.com/intl/v/car-safety/a-million-more"

    @Verbose
    Scenario: Display Cookie policy alertbox
        Then I expect that element "div.optanon-alert-box-bg" becomes displayed

    Scenario: Accept cookies
        When I click on the button "button.optanon-allow-all.accept-cookies-button"
        Then I expect that element "div.optanon-alert-box-wrapper" becomes not displayed

    Scenario: Cars menu modal hover
        When I click on the button "button[data-autoid='nav:topNavCarMenu']"
        Then I expect that element "button[data-autoid='nav:carMenuCloseButton']" becomes displayed