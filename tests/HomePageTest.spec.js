const {test, expect} = require('@playwright/test');

test('Homepage', async({page})=>{


await page.goto('https://www.demoblaze.com/index.html');

  const PageTitle = await page.title();
  console.log("title is : " + PageTitle);

  await expect(page).toHaveTitle('STORE');

  const pageURL = await page.url();

  await expect(page).toHaveURL('https://www.demoblaze.com/index.html');
  console.log('Expected url is :' + pageURL);

   //await page.close();


})

