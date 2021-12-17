class CustomerComponent {

    private custName: String;

    private custId: number;

   
    constructor(id:number=0, name:String ="xyz",private city:String="abc"){
        this.custId=id;
        this.custName=name
        this.city=city
    }
    public showDetails():void{
        console.log("Customer Details ::  Id :" +this.custId +", Name : "+ this.custName +" City :"+ this.city)
    }

}


let c1: CustomerComponent = new CustomerComponent();
let c2: CustomerComponent = new CustomerComponent(0);
let c3: CustomerComponent = new CustomerComponent(123,"maneesh");
let c4: CustomerComponent = new CustomerComponent(123,"maneesh","gandhinagar");

c1.showDetails()
c2.showDetails()
c3.showDetails()
c4.showDetails()

