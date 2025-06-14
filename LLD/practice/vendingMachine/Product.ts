class Product{
    protected name: string;
    protected price: string

    constructor(name: string, price: string){
        this.name = name
        this.price = price
    }

    get getName() : string{
        return this.name
    }

    get getPrice() : string{
        return this.price
    }
}

export default Product