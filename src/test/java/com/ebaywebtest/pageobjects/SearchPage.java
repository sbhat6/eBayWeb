package com.ebaywebtest.pageobjects;

import java.util.List;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import com.ebaywebtest.stepdefinitions.Hook_DriverInitialization;

//Page object class for Search Page
public class SearchPage extends Hook_DriverInitialization { // Java OOP Inheritance concept

	public SearchPage(WebDriver driver) { // Java OOP concept Constructors
		PageFactory.initElements(driver, this);
	}

	@FindBy(className = "s-item__title")
	@CacheLookup
	List<WebElement> searchResults;

	public String selectItem() {

		int totalSearchResults = searchResults.size();
		//System.out.println(totalSearchResults);
		String itemTitle = "";

		for (int i = 0; i < totalSearchResults; i++) { //Iterating through the titles of every search result
			itemTitle = searchResults.get(i).getText();
			//System.out.println(itemTitle);
			if (itemTitle.contains(selectionCriteria)) { //Selecting a search result based on criteria passed
				searchResults.get(i).click();
				break;
			}
		}
		return itemTitle;
	}
}
