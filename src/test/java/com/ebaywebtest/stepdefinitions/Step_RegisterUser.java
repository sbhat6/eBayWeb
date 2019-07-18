package com.ebaywebtest.stepdefinitions;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;

import com.ebaywebtest.pageobjects.HomePage;
import com.ebaywebtest.pageobjects.LoginPage;
import com.ebaywebtest.pageobjects.RegisterPage;

import cucumber.api.java.en.*;

public class Step_RegisterUser {

	private Hook_DriverInitialization driverhook;
	public WebDriver driver;
	public HomePage hp;
	public RegisterPage rp;
	public LoginPage lp;

	public Step_RegisterUser(Hook_DriverInitialization driverhook) {
		this.driverhook = driverhook;
	}

	@Given("^User launches Chrome browser$")
	public void user_launches_chrome_browser() throws Throwable {
		driver = driverhook.getDriver();
		driver.manage().window().maximize();
	}

	@When("^Opens the website (.+)$")
	public void opens_the_website(String url) throws Throwable {
		driver.get(url);
	}
	
	@And("^Clicks on register link$")
	public void clicks_on_register_link() throws Throwable {
		hp = new HomePage(driver);
		hp.clickRegisterLink();
	}

	@And("^Registers with details$")
	public void registers_with_details() throws Throwable {
		rp = new RegisterPage(driver);
		rp.enterFirstName();
		rp.enterLastName();
		rp.enterEmail();
		rp.enterPassword();
		rp.clickRegisterButton();
	}

	@Then("^The new user registration should be successful$")
	public void the_new_user_registration_should_be_successful() throws Throwable {
		System.out.println(driver.getTitle());
		hp = new HomePage(driver);
		hp.logoutOperation();
	}

	@And("^Enters the username as (.+) and password as (.+)$")
	public void enters_the_usename_as_and_password_as(String username, String password) throws Throwable {
		lp = new LoginPage(driver);
		rp = new RegisterPage(driver);
		rp.clickSigninLink();
		lp.enterUsedId(username);
		lp.enterPassword(username);
		lp.clickSignin();
	}

	@Then("^User login should be successful$")
	public void user_login_should_be_successful() throws Throwable {
		System.out.println(driver.getTitle());
	}

	@Then("^User logout should be successful$")
	public void user_logout_should_be_successful() throws Throwable {
		hp = new HomePage(driver);
		hp.logoutOperation();
	}

}