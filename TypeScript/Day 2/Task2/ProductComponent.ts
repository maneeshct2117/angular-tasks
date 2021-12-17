class ProductComponent {
    private productName: String;
    private productId: number;
    private unitPrice:number;
    private qty:number;

    constructor(id:number){
        this.productId=id;
       
    }
    get Name():String{
        return this.productName
    }

    set Name(name:String){
        this.productName=name
    }

    get Id():number{
        return this.productId
    }

    get Price():number{
        return this.unitPrice
    }

    set Price(price:number){
        this.unitPrice=price
    }

    get Qty():number{
        return this.qty
    }

    set Qty(qty:number){
        this.qty=qty
    }
}
let p1: ProductComponent = new ProductComponent(1);
p1.Name="Product one"
p1.Price=1234;
p1.Qty=12;

console.log("Product Details::")
console.log("Id :"+p1.Id)
console.log("Name :"+p1.Name)
console.log("Price :"+p1.Price)
console.log("Qty :"+p1.Qty)

