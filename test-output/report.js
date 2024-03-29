$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("RegisterLogin.feature");
formatter.feature({
  "line": 1,
  "name": "Register and Login",
  "description": "",
  "id": "register-and-login",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Verify user registration",
  "description": "",
  "id": "register-and-login;verify-user-registration",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@register"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User launches Chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Opens the website \u003curl\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Clicks on register link",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Registers with details",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "The new user registration should be successful",
  "keyword": "Then "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "register-and-login;verify-user-registration;",
  "rows": [
    {
      "cells": [
        "url"
      ],
      "line": 13,
      "id": "register-and-login;verify-user-registration;;1"
    },
    {
      "cells": [
        "https://www.ebay.com.au"
      ],
      "line": 14,
      "id": "register-and-login;verify-user-registration;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 15899617550,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Verify user registration",
  "description": "",
  "id": "register-and-login;verify-user-registration;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@register"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User launches Chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Opens the website https://www.ebay.com.au",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Clicks on register link",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Registers with details",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "The new user registration should be successful",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_RegisterUser.user_launches_chrome_browser()"
});
formatter.result({
  "duration": 1932205201,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.ebay.com.au",
      "offset": 18
    }
  ],
  "location": "Step_RegisterUser.opens_the_website(String)"
});
formatter.result({
  "duration": 8870391355,
  "status": "passed"
});
formatter.match({
  "location": "Step_RegisterUser.clicks_on_register_link()"
});
formatter.result({
  "duration": 9852991231,
  "status": "passed"
});
formatter.match({
  "location": "Step_RegisterUser.registers_with_details()"
});
formatter.result({
  "duration": 13327582595,
  "error_message": "java.lang.AssertionError: null\r\n\tat org.testng.Assert.fail(Assert.java:96)\r\n\tat org.testng.Assert.fail(Assert.java:103)\r\n\tat com.ebaywebtest.stepdefinitions.Step_RegisterUser.registers_with_details(Step_RegisterUser.java:69)\r\n\tat ✽.And Registers with details(RegisterLogin.feature:9)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Step_RegisterUser.the_new_user_registration_should_be_successful()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1323099446,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 17,
  "name": "Verify user login",
  "description": "",
  "id": "register-and-login;verify-user-login",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 16,
      "name": "@signin"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "User launches Chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "Opens the website \u003curl\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "Clicks on register link",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "Enters the username as \u003cusername\u003e and password as \u003cpassword\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "User login should be successful",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "User logout should be successful",
  "keyword": "Then "
});
formatter.examples({
  "line": 26,
  "name": "",
  "description": "",
  "id": "register-and-login;verify-user-login;",
  "rows": [
    {
      "cells": [
        "url",
        "username",
        "password"
      ],
      "line": 27,
      "id": "register-and-login;verify-user-login;;1"
    },
    {
      "cells": [
        "https://www.ebay.com.au",
        "jdtester31@gmail.com",
        "jd135790"
      ],
      "line": 28,
      "id": "register-and-login;verify-user-login;;2"
    },
    {
      "cells": [
        "https://www.ebay.com.au",
        "jdtester111@gmail.com",
        "jd135790"
      ],
      "line": 29,
      "id": "register-and-login;verify-user-login;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 63853054017,
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: DevToolsActivePort file doesn\u0027t exist\n  (Driver info: chromedriver\u003d2.43.600210 (68dcf5eebde37173d4027fa8635e332711d2874a),platform\u003dWindows NT 6.1.7601 SP1 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 60.07 seconds\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027SB-GANAPATI01\u0027, ip: \u0027107.104.13.100\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_151\u0027\nDriver info: driver.version: ChromeDriver\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.JsonWireProtocolResponse.lambda$errorHandler$0(JsonWireProtocolResponse.java:54)\r\n\tat org.openqa.selenium.remote.HandshakeResponse.lambda$getResponseFunction$0(HandshakeResponse.java:30)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.lambda$createSession$0(ProtocolHandshake.java:126)\r\n\tat java.util.stream.ReferencePipeline$3$1.accept(ReferencePipeline.java:193)\r\n\tat java.util.Spliterators$ArraySpliterator.tryAdvance(Spliterators.java:958)\r\n\tat java.util.stream.ReferencePipeline.forEachWithCancel(ReferencePipeline.java:126)\r\n\tat java.util.stream.AbstractPipeline.copyIntoWithCancel(AbstractPipeline.java:498)\r\n\tat java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:485)\r\n\tat java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:471)\r\n\tat java.util.stream.FindOps$FindOp.evaluateSequential(FindOps.java:152)\r\n\tat java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:234)\r\n\tat java.util.stream.ReferencePipeline.findFirst(ReferencePipeline.java:464)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:128)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:74)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:136)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:213)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:131)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:181)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:168)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:123)\r\n\tat com.ebaywebtest.stepdefinitions.Hook_DriverInitialization.driverSetup(Hook_DriverInitialization.java:38)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:202)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\r\n\tat cucumber.runtime.model.CucumberScenarioOutline.run(CucumberScenarioOutline.java:46)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:124)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:583)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:719)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:989)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:125)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:109)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:648)\r\n\tat org.testng.TestRunner.run(TestRunner.java:505)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:455)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:450)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:415)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:364)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:84)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1208)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1137)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1049)\r\n\tat org.testng.TestNG.run(TestNG.java:1017)\r\n\tat org.apache.maven.surefire.testng.TestNGExecutor.run(TestNGExecutor.java:283)\r\n\tat org.apache.maven.surefire.testng.TestNGXmlTestSuite.execute(TestNGXmlTestSuite.java:75)\r\n\tat org.apache.maven.surefire.testng.TestNGProvider.invoke(TestNGProvider.java:120)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.invokeProviderInSameClassLoader(ForkedBooter.java:384)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:345)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.execute(ForkedBooter.java:126)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:418)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 28,
  "name": "Verify user login",
  "description": "",
  "id": "register-and-login;verify-user-login;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 16,
      "name": "@signin"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "User launches Chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "Opens the website https://www.ebay.com.au",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "Clicks on register link",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "Enters the username as jdtester31@gmail.com and password as jd135790",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "User login should be successful",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "User logout should be successful",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_RegisterUser.user_launches_chrome_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.ebay.com.au",
      "offset": 18
    }
  ],
  "location": "Step_RegisterUser.opens_the_website(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Step_RegisterUser.clicks_on_register_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "jdtester31@gmail.com",
      "offset": 23
    },
    {
      "val": "jd135790",
      "offset": 60
    }
  ],
  "location": "Step_RegisterUser.enters_the_usename_as_and_password_as(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Step_RegisterUser.user_login_should_be_successful()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Step_RegisterUser.user_logout_should_be_successful()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 263822,
  "error_message": "java.lang.NullPointerException\r\n\tat com.ebaywebtest.stepdefinitions.Hook_DriverInitialization.driverKill(Hook_DriverInitialization.java:59)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.model.CucumberScenarioOutline.run(CucumberScenarioOutline.java:46)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:124)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:583)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:719)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:989)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:125)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:109)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:648)\r\n\tat org.testng.TestRunner.run(TestRunner.java:505)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:455)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:450)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:415)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:364)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:84)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1208)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1137)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1049)\r\n\tat org.testng.TestNG.run(TestNG.java:1017)\r\n\tat org.apache.maven.surefire.testng.TestNGExecutor.run(TestNGExecutor.java:283)\r\n\tat org.apache.maven.surefire.testng.TestNGXmlTestSuite.execute(TestNGXmlTestSuite.java:75)\r\n\tat org.apache.maven.surefire.testng.TestNGProvider.invoke(TestNGProvider.java:120)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.invokeProviderInSameClassLoader(ForkedBooter.java:384)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:345)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.execute(ForkedBooter.java:126)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:418)\r\n",
  "status": "failed"
});
formatter.before({
  "duration": 15577714053,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "Verify user login",
  "description": "",
  "id": "register-and-login;verify-user-login;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 16,
      "name": "@signin"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "User launches Chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "Opens the website https://www.ebay.com.au",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "Clicks on register link",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "Enters the username as jdtester111@gmail.com and password as jd135790",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "User login should be successful",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "User logout should be successful",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_RegisterUser.user_launches_chrome_browser()"
});
formatter.result({
  "duration": 1735093348,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.ebay.com.au",
      "offset": 18
    }
  ],
  "location": "Step_RegisterUser.opens_the_website(String)"
});
formatter.result({
  "duration": 10496507840,
  "status": "passed"
});
formatter.match({
  "location": "Step_RegisterUser.clicks_on_register_link()"
});
formatter.result({
  "duration": 13899073004,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "jdtester111@gmail.com",
      "offset": 23
    },
    {
      "val": "jd135790",
      "offset": 61
    }
  ],
  "location": "Step_RegisterUser.enters_the_usename_as_and_password_as(String,String)"
});
formatter.result({
  "duration": 19960731696,
  "status": "passed"
});
formatter.match({
  "location": "Step_RegisterUser.user_login_should_be_successful()"
});
formatter.result({
  "duration": 21874256909,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"id\",\"selector\":\"//*[@id\u003d\u0027gh-ug\u0027]/b[1]\"}\n  (Session info: chrome\u003d75.0.3770.142)\n  (Driver info: chromedriver\u003d2.43.600210 (68dcf5eebde37173d4027fa8635e332711d2874a),platform\u003dWindows NT 6.1.7601 SP1 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027SB-GANAPATI01\u0027, ip: \u0027107.104.13.100\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_151\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.43.600210 (68dcf5eebde371..., userDataDir: C:\\Users\\SBCA20~1.GAN\\AppDa...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:52848}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 75.0.3770.142, webStorageEnabled: true}\nSession ID: bc4694e5b664b7099f3b36beb6ba083b\n*** Element info: {Using\u003did, value\u003d//*[@id\u003d\u0027gh-ug\u0027]/b[1]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy20.getText(Unknown Source)\r\n\tat com.ebaywebtest.pageobjects.HomePage.verifyName(HomePage.java:51)\r\n\tat com.ebaywebtest.stepdefinitions.Step_RegisterUser.user_login_should_be_successful(Step_RegisterUser.java:104)\r\n\tat ✽.Then User login should be successful(RegisterLogin.feature:23)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Step_RegisterUser.user_logout_should_be_successful()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1321124108,
  "status": "passed"
});
formatter.uri("SearchAndBuy.feature");
formatter.feature({
  "line": 1,
  "name": "Add item to cart",
  "description": "",
  "id": "add-item-to-cart",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Verify user registration",
  "description": "",
  "id": "add-item-to-cart;verify-user-registration",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@cart"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User launches Chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Opens the website \u003curl\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Searches for an item",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Selects an item from the search result",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "adds it to the cart",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "item should be added to the cart successfully",
  "keyword": "Then "
});
formatter.examples({
  "line": 13,
  "name": "",
  "description": "",
  "id": "add-item-to-cart;verify-user-registration;",
  "rows": [
    {
      "cells": [
        "url"
      ],
      "line": 14,
      "id": "add-item-to-cart;verify-user-registration;;1"
    },
    {
      "cells": [
        "https://www.ebay.com.au"
      ],
      "line": 15,
      "id": "add-item-to-cart;verify-user-registration;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 20712023786,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Verify user registration",
  "description": "",
  "id": "add-item-to-cart;verify-user-registration;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@cart"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User launches Chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Opens the website https://www.ebay.com.au",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Searches for an item",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Selects an item from the search result",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "adds it to the cart",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "item should be added to the cart successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_RegisterUser.user_launches_chrome_browser()"
});
formatter.result({
  "duration": 1759240533,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.ebay.com.au",
      "offset": 18
    }
  ],
  "location": "Step_RegisterUser.opens_the_website(String)"
});
formatter.result({
  "duration": 9445573449,
  "status": "passed"
});
formatter.match({
  "location": "Step_SearchAndBuy.searches_for_an_item()"
});
formatter.result({
  "duration": 27530295063,
  "status": "passed"
});
formatter.match({
  "location": "Step_SearchAndBuy.selects_an_item_from_the_search_result()"
});
formatter.result({
  "duration": 10999666149,
  "status": "passed"
});
formatter.match({
  "location": "Step_SearchAndBuy.adds_it_to_the_cart()"
});
formatter.result({
  "duration": 10510960653,
  "error_message": "java.lang.AssertionError: null\r\n\tat org.testng.Assert.fail(Assert.java:96)\r\n\tat org.testng.Assert.fail(Assert.java:103)\r\n\tat com.ebaywebtest.stepdefinitions.Step_SearchAndBuy.adds_it_to_the_cart(Step_SearchAndBuy.java:63)\r\n\tat ✽.And adds it to the cart(SearchAndBuy.feature:10)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Step_SearchAndBuy.item_should_be_added_to_the_cart_successfully()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1542610139,
  "status": "passed"
});
});