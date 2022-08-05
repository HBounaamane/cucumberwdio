Feature: google searching

  As a user, I want to search for a keyword using google,
  so that I can find links showing detailed information about my research


  Rule : Searching from google search bar with valid keyword displays links as result

    Background:
      Given the user is at the google home page

    Example: user enters test as keyword
      When the user searches for "test" into the search bar
      Then links related to test are shown on the result page

    Example: user enters a non valid keyword
      When the user searches for "%%%@@+++====@$$$" into the search bar
      Then no links related to %%%@@+++====@$$$ are shown

    Example: user enters a valid keyword
      When the user enters "ISTQB" into the search bar
      Then a List box is displayed showing suggestions related to user search
