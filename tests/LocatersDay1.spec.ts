import { test, expect} from '@playwright/test'



test('locators', async({page})=>{


await page.goto('https://sdetqa.vercel.app/pw-locators-demo-app#')

  await page.getByRole('button', { name: 'Create Account' }).click();
  
  await page.getByRole('checkbox', { name: 'Subscribe to newsletter' }).check();

  let check = await page.getByText('Orange').isVisible();


  if(check === true){
    console.log('Element is visible:  ', check);
  }else{
    console.log('Element is not visible');
  }

    await page.locator("xpath=//*[@onclick=\"notify('Run Gamma')\"]")
        .filter({ hasText: 'Run' }).click();

        
})

test('Xpath', async({page})=>{



await page.goto('https://www.flipkart.com/')

const popup = page.locator('//span[@class="b3wTlE"]')
await popup.click()
const fashion = page.locator  ("//div[text () = 'Fashion']")

await expect(fashion).toBeEnabled();
await expect(fashion).toBeVisible();
console.log('Fashion is enabled and visible');
console.log(await fashion.innerText())


await fashion.click()

//
await page.close()






})