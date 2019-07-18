package com.ebaywebtest.pageobjects;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.testng.Assert;

import com.ebaywebtest.stepdefinitions.Hook_DriverInitialization;

//Page object class for Home Page
public class HomePage extends Hook_DriverInitialization { // Java OOP Inheritance concept

	public HomePage(WebDriver driver) { // Java OOP concept Constructors
		PageFactory.initElements(driver, this);
	}

	@FindBy(xpath = "//span[@id='gh-ug']/a")
	@CacheLookup
	WebElement signinLink;

	public void clickSigninLink() {
		signinLink.click();
	}

	@FindBy(xpath = "//span[@id='gh-ug-flex']/a")
	@CacheLookup
	WebElement registerLink;

	public void clickRegisterLink() {
		registerLink.click();
	}

	@FindBy(id = "//*[@id='gh-ug']/b[1]")
	@CacheLookup
	WebElement nameField;
	@FindBy(xpath = "//li[@id='gh-uo']/a[1]")
	@CacheLookup
	WebElement signoutButton;

	public void logoutOperation() {
		nameField.click();
		signoutButton.click();
		if (driver.getPageSource().contains("You've signed out. See you again soon!")) {
			Assert.assertTrue(true);
		} else
			Assert.assertTrue(false, "Signout error");
	}
	public void verifyName() {
		String name = nameField.getText();
		Assert.assertEquals(name, firstname, "Firstname verification failed");
	}

	@FindBy(id = "gh-ac")
	@CacheLookup
	WebElement searchBox;

	public void enterSearchKeyword() {
		searchBox.sendKeys(keyword);
	}

	@FindBy(css = "#gh-btn")
	@CacheLookup
	WebElement searchButton;

	public void clickSearchButton() {
		searchButton.click();
	}
}
