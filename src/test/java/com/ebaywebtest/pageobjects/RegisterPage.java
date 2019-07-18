package com.ebaywebtest.pageobjects;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.ebaywebtest.stepdefinitions.Hook_DriverInitialization;

//Page object class for Register Page
public class RegisterPage extends Hook_DriverInitialization { // Java OOP Inheritance concept

	public RegisterPage(WebDriver driver) { // Java OOP concept Constructors
		PageFactory.initElements(driver, this);
	}

	@FindBy(id = "bsRg")
	@CacheLookup
	WebElement signinLink;

	public void clickSigninLink() {
		signinLink.click();
	}

	@FindBy(id = "firstname")
	@CacheLookup
	WebElement firstName;

	public void enterFirstName() {
		firstName.sendKeys(firstname);
	}

	@FindBy(id = "lastname")
	@CacheLookup
	WebElement lastName;

	public void enterLastName() {
		lastName.sendKeys(lastname);
	}

	@FindBy(xpath = "//input[@id='email']")
	@CacheLookup
	WebElement eMail;

	public void enterEmail() {
		eMail.sendKeys(regemail);
	}

	@FindBy(id = "PASSWORD")
	@CacheLookup
	WebElement passWord;

	public void enterPassword() {
		passWord.sendKeys(regpassword);
	}

	@FindBy(css = "#ppaFormSbtBtn")
	@CacheLookup
	WebElement registerButton;

	public void clickRegisterButton() throws InterruptedException {
		Thread.sleep(3000);
		registerButton.click();
	}

	@FindBy(id = "sgninter")
	@CacheLookup
	WebElement existEmail;

	public Object verifyExistingEmail() {
		if (driver.getTitle() == "Get started with ebay") {
			existEmail.click();
		} 
		return null;
	}
}
