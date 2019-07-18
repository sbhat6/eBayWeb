package com.ebaywebtest.testrunners;

import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;

@CucumberOptions(features = {".//FeatureFiles/" },
					glue = "com.ebaywebtest.stepdefinitions", 
					dryRun = false, monochrome = false, 
					plugin = {"pretty", "html:test-output"},
					tags= {"@register, @signin"})

public class TestRunner extends AbstractTestNGCucumberTests {

}
