import {test, expect} from '@playwright/test';


test('register',async({page})  =>{

 await page.goto("https://rahulshettyacademy.com/client/#/auth/login")
 const logocheck = await expect(page.locator("//*[ text( ) ='Rahul Shetty Academy']"))

 await logocheck.toBeVisible()

    console.log("It is visible")


await page.close()

})