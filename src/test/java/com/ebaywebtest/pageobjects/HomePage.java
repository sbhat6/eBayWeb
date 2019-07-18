package com.ebaywebtest.pageobjects;

import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.ebaywebtest.stepdefinitions.Hook_DriverInitialization;

public class HomePage extends Hook_DriverInitialization{
	
	public HomePage(WebDriver driver) {
		PageFactory.initElements(driver, this);
	}
	
	@FindBy(xpath="//span[@id='gh-ug']/a")
	@CacheLookup
	WebElement signinLink;
	public void clickSigninLink() {
		signinLink.click();
	}
	
	@FindBy(xpath="//span[@id='gh-ug-flex']/a")
	@CacheLookup
	WebElement registerLink;
	public void clickRegisterLink() {
		registerLink.click();
	}
	
	@FindBy(id="gh-ug")
	@CacheLookup
	WebElement nameField;
	
	@FindBy(xpath="//li[@id='gh-uo']/a[1]")
	@CacheLookup
	WebElement signinButton;
	
	public void logoutOperation() {
		nameField.click();
		signinButton.click();
	}
}
