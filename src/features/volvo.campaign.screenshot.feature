Feature: Performing screenshot service

    As many users, are going to load the 
    campaign url, We need to solidfy our
    backlinks and navigations

    Background:
        Given I open the url "https://www.volvocars.com/intl/v/car-safety/a-million-more"

    @Verbose
    Scenario: Taking a fullscreen shot of website
        When Page gets "loaded" capture "screen" and save image as "campaign-screen"
        Then I expect the captured "screen" image "campaign-screen" to be equal
    