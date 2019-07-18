package com.ebaywebtest.stepdefinitions;

import org.apache.log4j.Logger;
import org.apache.log4j.PropertyConfigurator;
import org.openqa.selenium.WebDriver;
import org.testng.Assert;
import com.ebaywebtest.pageobjects.HomePage;
import com.ebaywebtest.pageobjects.LoginPage;
import com.ebaywebtest.pageobjects.RegisterPage;
import cucumber.api.java.en.*;

//Cucumber Step Definition file -1st
public class Step_RegisterUser {

	private Hook_DriverInitialization driverhook;
	public WebDriver driver;
	public HomePage hp;
	public RegisterPage rp;
	public LoginPage lp;
	public static Logger logs;

	public Step_RegisterUser(Hook_DriverInitialization driverhook) { // Linking StepDefinition with driver in other
																		// class
		this.driverhook = driverhook;
	}

	@Given("^User launches Chrome browser$")
	public void user_launches_chrome_browser() throws Throwable {
		driver = driverhook.getDriver();
		driver.manage().window().maximize();
		logs = Logger.getLogger("ebayWebTest");
		PropertyConfigurator.configure("./Configurations\\Log4j.properties");
		logs.info("*****Broswer launched*****");
	}

	@When("^Opens the website (.+)$")
	public void opens_the_website(String url) throws Throwable {
		try {
			logs.info("*****Opening website*****");
			driver.get(url);
		} catch (Exception e) {
			logs.error("Error opening the URL");
			e.printStackTrace();
			Assert.fail();
		}
	}

	@And("^Clicks on register link$")
	public void clicks_on_register_link() throws Throwable {
		hp = new HomePage(driver);
		hp.clickRegisterLink();
	}

	@And("^Registers with details$")
	public void registers_with_details() throws Throwable {
		hp = new HomePage(driver);
		rp = new RegisterPage(driver);
		rp.enterFirstName();
		rp.enterLastName();
		rp.enterEmail();
		rp.enterPassword();
		try {
			rp.clickRegisterButton();
			hp.verifyName();
			logs.info("*****New user account created*****");
		} catch (Exception e) {
			logs.error("!!!!!Registration failed!!!!!");
			e.printStackTrace();
			Assert.fail();
		}

		rp.verifyExistingEmail();
	}

	@Then("^The new user registration should be successful$")
	public void the_new_user_registration_should_be_successful() throws Throwable {
		logs.info("*****Signing out*****");
		hp = new HomePage(driver);
		hp.logoutOperation();
		logs.info("*****Succesfully signed out*****");
	}

	@And("^Enters the username as (.+) and password as (.+)$")
	public void enters_the_usename_as_and_password_as(String username, String password) throws Throwable {
		logs.info("*****Signing in*****");
		lp = new LoginPage(driver);
		rp = new RegisterPage(driver);
		rp.clickSigninLink();
		lp.enterUsedId(username);
		lp.enterPassword(password);
		try {
			lp.clickSignin();
			if (driver.getPageSource().contains("Oops, that's not a match.")) {
				Assert.assertTrue(false, "Invalid username or password");
			} else
				logs.info("*****Succesfully signed in*****");
		} catch (Exception e) {
			logs.error("!!!!!Sign in failed!!!!!");
			e.printStackTrace();
			Assert.fail();
		}
	}

	@Then("^User login should be successful$")
	public void user_login_should_be_successful() throws Throwable {
		hp = new HomePage(driver);
		hp.verifyName();
	}

	@Then("^User logout should be successful$")
	public void user_logout_should_be_successful() throws Throwable {
		logs.info("*****Signing out*****");
		hp = new HomePage(driver);
		try {
			hp.logoutOperation();
			logs.info("*****Succesfully signed out*****");
		} catch (Exception e) {
			logs.error("!!!!!Sign out failed!!!!!");
			e.printStackTrace();
			Assert.fail();
		}
	}
}