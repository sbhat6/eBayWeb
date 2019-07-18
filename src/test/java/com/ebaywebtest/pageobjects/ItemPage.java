package com.ebaywebtest.pageobjects;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.testng.Assert;
import com.ebaywebtest.stepdefinitions.Hook_DriverInitialization;

//Page object class for Item Page
public class ItemPage extends Hook_DriverInitialization { // Java OOP Inheritance concept

	public ItemPage(WebDriver driver) { // Java OOP concept Constructors
		PageFactory.initElements(driver, this);
	}

	@FindBy(css = "#isCartBtn_btn")
	@CacheLookup
	WebElement addToCartButton;

	public void clickAddToCartButton() {
		if (driver.getPageSource().contains("Add to cart")) {
			addToCartButton.click();
			Assert.assertTrue(true);
		} else
			Assert.assertTrue(false, "Item cannont be added to cart from this page");
	}
}