const { Builder, By, until } = require("selenium-webdriver");

async function loginTest() {
    let driver = await new Builder().forBrowser("chrome").build();
    try {
        await driver.get("https://www.saucedemo.com/");
        await driver.findElement(By.id("user-name")).sendKeys("standard_user");
        await driver.findElement(By.id("password")).sendKeys("secret_sauce");
        await driver.findElement(By.id("login-button")).click();
        await driver.wait(until.elementLocated(By.className("inventory_list")), 5000);
        await driver.sleep(5000); // Keeps the browser open for 5 seconds
        console.log("Login successful!");
    } finally {
    }
}

loginTest();
