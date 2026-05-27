
const {test, expect} = require('@playwright/test');
const { LumenPO } = require('./PageObjects/LumenPO');






test('Automate signUp flow', async ({ page }) => {

  const at = new LumenPO(page);

  await at.goTo();
  await page.waitForLoadState("load");

  await at.signIn();

  await page.waitForURL("https://e-commerce-hub--myounusbaig93.replit.app/");
//   await page.context().storageState({ path: 'auth.json' });


});
// test.use({ storageState: 'auth.json' });


test('Automate the add to cart order in E-commerce', async({page})=>
{
    
    const at = new LumenPO(page);

    await at.goTo();
    await page.waitForLoadState("load");
    await at.signIn();
    await at.navigateShop()

    const addToCart = page.getByRole('button', { name: 'Add to Cart' });
    await expect(addToCart).toBeVisible();
    await expect(addToCart).toBeEnabled();
    await addToCart.click();
    const cart = page.locator('a[href="/cart"]');
    await expect(cart.first()).toContainText(/1|2|3/);
    await cart.first().click();
    const checkout = page.getByRole('button', {name: 'Proceed to Checkout'});
    await expect(checkout).toBeVisible();
    await checkout.click();
    await at.placeOrder();
    await page.waitForURL(/.*\/orders\/.*/);
    const orderConfirmed = page.locator('h1');
    await expect(orderConfirmed).toBeVisible();
    await expect(orderConfirmed).toHaveText('Thank you for your order');
    
})


test('@Web Verify the Order Id', async({page})=>{


  const at = new LumenPO(page);
  await at.goTo();
  await page.waitForLoadState();
  await at.signIn();
  const account  = page.getByRole('button', { name: 'Account' });
  await expect(account.first()).toBeVisible();
  await account.first().click();
  const orderhistory = page.getByRole('menuitem', { name: 'Orders' });
  await expect(orderhistory).toBeVisible();
  await orderhistory.click();

})
