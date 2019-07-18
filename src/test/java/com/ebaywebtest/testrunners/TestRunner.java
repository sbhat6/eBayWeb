package com.ebaywebtest.testrunners;

import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;

//Cucumber Test Runner file
@CucumberOptions(features = {".//FeatureFiles/" }, 
					glue = "com.ebaywebtest.stepdefinitions", 
					dryRun = false, monochrome = false, 
					plugin = {"pretty", "html:test-output" }, 
					tags = { "@register, @signin, @cart" })

public class TestRunner extends AbstractTestNGCucumberTests {

}
