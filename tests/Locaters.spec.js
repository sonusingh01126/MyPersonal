
import { test, expect } from '@playwright/test';

test('Locaters', async({page})=>{ 

 await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

 await page.locator('[name="username"]').fill("Admin");
 await page.locator('[name="password"]').fill("admin123"); 
 await page.click("//*[@type='submit']"); 
 await page.getByAltText('client brand banner').isVisible();


      const Title = await page.title();
      console.log(Title);
      
      await expect.soft(page).toHaveTitle('OrangeHRM')

      await page.close();


})