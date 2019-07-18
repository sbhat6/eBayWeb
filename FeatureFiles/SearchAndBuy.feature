Feature: Add item to cart

@cart
Scenario Outline: Verify user registration

Given User launches Chrome browser
When Opens the website <url>
And Searches for an item
And Selects an item from the search result
And adds it to the cart
Then item should be added to the cart successfully

Examples:
|url					|
|https://www.ebay.com.au|