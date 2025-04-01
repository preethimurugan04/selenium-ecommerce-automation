const { Builder, By } = require("selenium-webdriver");

(async function addToCart() {
    let driver = await new Builder().forBrowser("chrome").build();

    try {
        await driver.get("https://www.saucedemo.com/");
        
        // Login
        await driver.findElement(By.id("user-name")).sendKeys("standard_user");
        await driver.findElement(By.id("password")).sendKeys("secret_sauce");
        await driver.findElement(By.id("login-button")).click();

        // Add Sauce Labs Backpack to cart
        await driver.findElement(By.id("add-to-cart-sauce-labs-bolt-t-shirt")).click();
        console.log("Bolt T-shirt added to cart ✅");

        // Add Sauce Labs Bike Light to cart
        await driver.findElement(By.id("add-to-cart-sauce-labs-bike-light")).click();
        console.log("Bike Light added to cart ✅");

    } finally {
    }
})();
