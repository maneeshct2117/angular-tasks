class CustomerComponent {
    constructor(id = 0, name = "xyz", city = "abc") {
        this.city = city;
        this.custId = id;
        this.custName = name;
        this.city = city;
    }
    showDetails() {
        console.log("Customer Details ::  Id :" + this.custId + ", Name : " + this.custName + " City :" + this.city);
    }
}
let c1 = new CustomerComponent();
let c2 = new CustomerComponent(0);
let c3 = new CustomerComponent(123, "maneesh");
let c4 = new CustomerComponent(123, "maneesh", "gandhinagar");
c1.showDetails();
c2.showDetails();
c3.showDetails();
c4.showDetails();
