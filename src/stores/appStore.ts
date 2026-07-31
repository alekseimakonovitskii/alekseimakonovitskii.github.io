import { action, makeObservable, observable } from 'mobx';
import { EcommercePayload, PixelI, PixelEventPayload } from '../types/pixel';

class AppStore {
    @observable
    private userEmail: string;

    @observable
    private productId: string;

    @observable
    private productName: string;

    @observable
    private productPrice: string;

    constructor() {
        this.userEmail = '';
        this.productId = '';
        this.productName = '';
        this.productPrice = '';

        makeObservable(this);
    }

    public getUserEmail = () => this.userEmail;

    public getProductId = () => this.productId;

    public getProductName = () => this.productName;

    public getProductPrice = () => this.productPrice;

    @action.bound
    public setUserEmail(value: string) {
        this.userEmail = value;
    }

    @action.bound
    public setProductId(value: string) {
        this.productId = value;
    }

    @action.bound
    public setProductName(value: string) {
        this.productName = value;
    }

    @action.bound
    public setProductPrice(value: string) {
        this.productPrice = value;
    }

    private getPixel(): PixelI | null {
        return window.acpx || null;
    }

    private buildEcommercePayload(): EcommercePayload {
        return {
            currency: 'USD',
            value: parseFloat(this.productPrice) || 0,
            items: [{
                item_id: this.productId,
                item_name: this.productName,
                price: parseFloat(this.productPrice) || 0,
            }],
        };
    }

    private buildPixelPayload(): PixelEventPayload {
        return {
            web_event_data: {
                ecommerce: this.buildEcommercePayload(),
                user_email: this.userEmail,
            },
        };
    }

    @action.bound
    public sendAddToCart() {
        const pixel = this.getPixel();

        if (!pixel) {
            // eslint-disable-next-line no-console
            console.warn('Pixel script not loaded — acpx is undefined');

            return;
        }

        const payload = this.buildPixelPayload();

        try {
            pixel.sendEvent('add_to_cart', payload);
            // eslint-disable-next-line no-console
            console.log('add_to_cart successfully sent: ', payload);
        } catch (error) {
            // eslint-disable-next-line no-console
            console.log('add_to_cart got an error: ', error);
        }
    }

    @action.bound
    public reset() {
        this.userEmail = '';
        this.productId = '';
        this.productName = '';
        this.productPrice = '';
    }
}

export default AppStore;
