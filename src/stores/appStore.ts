import { action, makeObservable, observable } from 'mobx'

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

    @action.bound
    public sendAddToCart() {
        // eslint-disable-next-line no-console
        console.log('add_to_cart', {
            user: { email: this.userEmail },
            product: {
                id: this.productId,
                name: this.productName,
                price: this.productPrice,
            },
        });
    }

    @action.bound
    public reset() {
        this.userEmail = '';
        this.productId = '';
        this.productName = '';
        this.productPrice = '';
    }
}

export default AppStore
