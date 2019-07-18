package com.ebaywebtest.pageobjects;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.ebaywebtest.stepdefinitions.Hook_DriverInitialization;

//Page object class for Login Page
public class LoginPage extends Hook_DriverInitialization { // Java OOP Inheritance concept

	public LoginPage(WebDriver driver) { // Java OOP concept Constructors
		PageFactory.initElements(driver, this);
	}

	@FindBy(id = "userid")
	@CacheLookup
	WebElement userId;

	public void enterUsedId(String username) {
		userId.sendKeys(username);
	}

	@FindBy(id = "pass")
	@CacheLookup
	WebElement passWord;

	public void enterPassword(String password) {
		passWord.sendKeys(password);
	}

	@FindBy(id = "sgnBt")
	@CacheLookup
	WebElement signinButton;

	public void clickSignin() {
		signinButton.click();
	}
	
}
