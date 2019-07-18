package com.ebaywebtest.stepdefinitions;

import org.apache.log4j.Logger;
import org.apache.log4j.PropertyConfigurator;
import org.openqa.selenium.WebDriver;
import org.testng.Assert;

import com.ebaywebtest.pageobjects.HomePage;
import com.ebaywebtest.pageobjects.ItemPage;
import com.ebaywebtest.pageobjects.LoginPage;
import com.ebaywebtest.pageobjects.RegisterPage;
import com.ebaywebtest.pageobjects.SearchPage;

import cucumber.api.java.en.*;

//Cucumber Step Definition file -2nd
public class Step_SearchAndBuy {

	private Hook_DriverInitialization driverhook;
	public WebDriver driver;
	public HomePage hp;
	public RegisterPage rp;
	public LoginPage lp;
	public SearchPage sp;
	public ItemPage ip;
	public static Logger logs;

	public Step_SearchAndBuy(Hook_DriverInitialization driverhook) {
		this.driverhook = driverhook;
	}

	@And("^Searches for an item$")
	public void searches_for_an_item() throws Throwable {
		logs = Logger.getLogger("ebayWebTest");
		PropertyConfigurator.configure("./Configurations\\\\Log4j.properties");
		logs.info("*****Searching an item*****");
		driver = driverhook.getDriver();
		hp = new HomePage(driver);
		hp.enterSearchKeyword();
		hp.clickSearchButton();
	}

	@And("^Selects an item from the search result$")
	public void selects_an_item_from_the_search_result() throws Throwable {
		logs.info("*****Selecting an item*****");
		sp = new SearchPage(driver);
		String itemTitle = sp.selectItem();
		System.out.println("Item selected is: " + itemTitle);
	}

	@And("^adds it to the cart$")
	public void adds_it_to_the_cart() throws Throwable {
		sp = new SearchPage(driver);
		ip = new ItemPage(driver);
		String itemTitle = sp.selectItem();
		if (driver.getPageSource().contains(itemTitle)) {
			try {
				ip.clickAddToCartButton();
				logs.info("*****Item added to cart*****");
			} catch (Exception e) {
				logs.error("!!!!!Could not add item to cart!!!!!");
				e.printStackTrace();
				Assert.fail();
			}
		}
	}

	@Then("^item should be added to the cart successfully$")
	public void item_should_be_added_to_the_cart_successfully() throws Throwable {
		
	}

}
