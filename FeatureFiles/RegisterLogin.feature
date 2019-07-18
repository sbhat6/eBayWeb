Feature: Register and Login

@register
Scenario Outline: Verify user registration

Given User launches Chrome browser
When Opens the website <url>
And Clicks on register link
And Registers with details
Then The new user registration should be successful

Examples:
|url						|
|https://www.ebay.com.au	|

@signin
Scenario Outline: Verify user login

Given User launches Chrome browser
When Opens the website <url>
And Clicks on register link
And Enters the username as <username> and password as <password>
Then User login should be successful
Then User logout should be successful

Examples:
|	url						|	username				|	password	|
|	https://www.ebay.com.au	|	jdtester31@gmail.com	|	jd135790	|
|	https://www.ebay.com.au	|	jdtester111@gmail.com	|	jd135790	|