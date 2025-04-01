const { Builder, By, until } = require("selenium-webdriver");

(async function checkoutProcess() {
    let driver = await new Builder().forBrowser("chrome").build();

    try {
        // 1️⃣ Open the website (REPLACE with the actual site URL)
        await driver.get("https://www.saucedemo.com/"); // 🔥 Add this line

        // 2️⃣ Wait for the login field to appear
        await driver.wait(until.elementLocated(By.id("user-name")), 5000);

        // 3️⃣ Login
        await driver.findElement(By.id("user-name")).sendKeys("standard_user");
        await driver.findElement(By.id("password")).sendKeys("secret_sauce");
        await driver.findElement(By.id("login-button")).click();

        // 4️⃣ Wait for the page to load
        await driver.wait(until.elementLocated(By.className("shopping_cart_link")), 5000);

        // 5️⃣ Add items to cart
        await driver.findElement(By.id("add-to-cart-sauce-labs-bolt-t-shirt")).click();
        await driver.findElement(By.id("add-to-cart-sauce-labs-bike-light")).click();
        console.log("Products added to cart ✅");

        // 6️⃣ Go to cart
        await driver.findElement(By.className("shopping_cart_link")).click();
        console.log("Navigated to cart ✅");

        // 7️⃣ Click checkout
        await driver.wait(until.elementLocated(By.id("checkout")), 5000);
        await driver.findElement(By.id("checkout")).click();
        console.log("Clicked Checkout ✅");

        // 8️⃣ Fill checkout details
        await driver.wait(until.elementLocated(By.id("first-name")), 5000);
        await driver.findElement(By.id("first-name")).sendKeys("Preethi");
        await driver.findElement(By.id("last-name")).sendKeys("Murugan");  // Fixed extra space in "last-name "
        await driver.findElement(By.id("postal-code")).sendKeys("M55HL");

        // ✅ Click the "Continue" button
        await driver.findElement(By.id("continue")).click();
        console.log("Clicked Continue ✅");


        // 9️⃣ Click finish
        await driver.wait(until.elementLocated(By.id("finish")), 5000);
        await driver.findElement(By.id("finish")).click();
        console.log("Order placed successfully ✅");

    } finally {
        // driver.quit(); // Uncomment this to close the browser after execution
    }
})();
