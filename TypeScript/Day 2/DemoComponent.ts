class DemoComponent{

    // public customers:any[] = [];
    // constructor(private httpObj:HttpClient){

    // }

    private name:String ="Maneesh";


    public get Name():String{
        return this.name
    }

    public set Name(name:String){

        this.name=name;

    }
    
}


let empObject:DemoComponent = new DemoComponent();

empObject.Name="Bittoo";
console.log(empObject.Name)