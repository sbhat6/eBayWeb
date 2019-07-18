package com.ebaywebtest.utilities;

import java.io.File;
import java.io.FileInputStream;
import java.util.Properties;

public class ReadParameters {

	public Properties prop;

	public ReadParameters() {
		File fl = new File("./Configurations/Parameters.properties");
		try {
			FileInputStream fs = new FileInputStream(fl);
			prop = new Properties();
			prop.load(fs);
		} catch (Exception e) {
			System.out.println("Exception is " + e.getMessage());
		}
	}

	public String getBrowserName() {
		String browsername = prop.getProperty("browser");
		return browsername;
	}
	public String getChromePath() {
		String chromepath = prop.getProperty("chromepath");
		return chromepath;
	}
	public String getFirefoxPath() {
		String firefoxpath = prop.getProperty("firefoxpath");
		return firefoxpath;
	}
	public String getIEPath() {
		String iepath = prop.getProperty("iepath");
		return iepath;
	}
	public String getFirstName() {
		String firstname = prop.getProperty("firstname");
		return firstname;
	}
	public String getLastName() {
		String lastname = prop.getProperty("lastname");
		return lastname;
	}
	public String getEmail() {
		String regemail = prop.getProperty("regemail");
		return regemail;
	}
	public String getPassword() {
		String regpassword = prop.getProperty("regpassword");
		return regpassword;
	}




}
