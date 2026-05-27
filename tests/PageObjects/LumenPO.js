

class LumenPO {

    constructor(page){
        this.page = page;
        this.shop = page.getByRole('link', {name: 'Shop'});
        this.category = page.getByRole('link', {name: 'Ceramics'});
        this.product = page.getByText('Raku Stoneware Mug'); 
        this.signInLogo = page.locator('a[aria-label="Sign in"]');
        this.username = page.locator('input[type="email"]');
        this.continue = page.getByRole('button', { name: 'Sign in' });
        this.password = page.locator('input[type="password"]');
        this.checkout = page.getByRole('button', {name: 'Proceed to Checkout'});
        this.order = page.getByRole('button', { name: /place order/i });

        


    }

    async goTo(){
        await this.page.goto("https://e-commerce-hub--myounusbaig93.replit.app/");
    }

    async navigateShop(){
        await this.shop.first().click();
        await this.category.first().click();
        await this.product.first().click();

    }

    

    async placeOrder(){
        await this.order.click();
        
    }

    async signIn(){
        await this.signInLogo.click();
        await this.username.fill("Testuser@gmail.com");
        await this.password.fill("Mshahid@93");
        await this.continue.click();
       
    
    }


    async orders(){
        await this.account.first().click();
    }

}

module.exports = {LumenPO}