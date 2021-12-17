class ProductComponent {
    constructor(id = 0) {
        this.productId = id;
    }
    get Name() {
        return this.productName;
    }
    set Name(name) {
        this.productName = name;
    }
    get Id() {
        return this.productId;
    }
    get Price() {
        return this.unitPrice;
    }
    set Price(price) {
        this.unitPrice = price;
    }
    get Qty() {
        return this.qty;
    }
    set Qty(qty) {
        this.qty = qty;
    }
}
let p1 = new ProductComponent(1);
p1.Name = "Product one";
p1.Price = 1234;
p1.Qty = 12;
console.log("Product Details::");
console.log("Id :" + p1.Id);
console.log("Name :" + p1.Name);
console.log("Price :" + p1.Price);
console.log("Qty :" + p1.Qty);
