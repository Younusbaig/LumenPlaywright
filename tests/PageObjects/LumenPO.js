

class LumenPO {

    constructor(page){
        this.page = page;
        this.shop = page.getByRole('link', {name: 'Shop'});
        this.category = page.getByRole('link', {name: 'Ceramics'});
        this.product = page.getByText('Raku Stoneware Mug');
        this.addQuantity = page.locator("button:has(svg.lucide-plus)");
        this.addCart = page.getByRole('button', {name: 'Add to Cart'});
        this.signInLogo = page.locator('a[aria-label="Sign in"]');
        this.username = page.locator('#identifier-field');
        this.continue = page.getByRole('button', {name: 'Continue'})
        this.password = page.locator('#password-field');
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

    async addToCart(){
        await this.addQuantity.click();
        await this.addCart.click();

    }

    async placeOrder(){
        await this.order.click();
        
    }

    async signIn(){
        await this.signInLogo.click();
        await this.username.fill("myounusbaig93@gmail.com");
        await this.continue.nth(1).click();
        await this.password.fill("Myounus@93");
        await this.continue.first().click();
       
    
    }


    async orders(){
        await this.account.first().click();
    }

}

module.exports = {LumenPO}