import { Component, OnInit } from '@angular/core';
import { Category } from '../models/Catgeory';
import { Product } from '../models/Product';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  tech: string[] = ["Angular", "React", "Node JS", "Express"]


  categories: Category[] = [
    { path: "../../assets/angularicon.png", title: "Angular", description: "Front End Development Work" },
    { path: "../../assets/firefox.png", title: "Firefox", description: "Standard Compliant Browser" },
    { path: "../../assets/chrome.png", title: "Chrome", description: "Google's market dominant Browser" },
    { path: "../../assets/html.png", title: "HTML 5", description: "Next generation upgrade for HTML Language" },
    { path: "../../assets/css3.png", title: "CSS 3", description: "Stylesheet language featuring animations" },
    { path: "../../assets/android.png", title: "Android", description: "Popular mobile operating system" }

  ]
  pName: string = "";
  pPrice: number = 0;
  pQuantity: number = 0;

  result: number = 0;

  productName: string = "";
  productPrice: number = 0;
  productQuantity: number = 0;
  productId: number = 0;
  productCategory: string = "";

  constructor() { }
  tempProdId = 0;

  ngOnInit(): void {
  }

  getTotalAmount_click(): void {
    this.result = this.pQuantity * this.pPrice
  }
  product1: Product = { id: 1, name: "Product 1", quantity: 1, price: 100, category: "Category 1" }
  product2: Product = { id: 2, name: "Product 2", quantity: 2, price: 200, category: "Category 2" }
  product3: Product = { id: 3, name: "Product 3", quantity: 1, price: 300, category: "Category 3" }
  product4: Product = { id: 4, name: "Product 4", quantity: 2, price: 400, category: "Category 4" }
  product5: Product = { id: 5, name: "Product 5", quantity: 1, price: 500, category: "Category 5" }
  product = new Array(this.product1, this.product2, this.product3, this.product4, this.product5)

  addProduct_click(): void {
    let tempProduct: Product = { id: this.productId, name: this.productName, quantity: this.productQuantity, price: this.productPrice, category: this.productCategory }
    this.product.push(tempProduct)
  }
  deleteRow(id: any) {

    let index: number = this.product.findIndex(x => x.id == id)
    this.product.splice(index, 1);
  }
  editRow(id: any) {
    let tempProduct: any = this.product.find(x => x.id == id)
    this.productId = tempProduct.id
    this.productName = tempProduct.name
    this.productQuantity = tempProduct.quantity
    this.productPrice = tempProduct.price
    this.productCategory = tempProduct.category
    this.tempProdId = tempProduct.id
  }
  updateProduct_click() {
    let i: number = this.product.findIndex(x => x.id == this.tempProdId)
    this.product[i].id = this.productId
    this.product[i].name = this.productName
    this.product[i].quantity = this.productQuantity
    this.product[i].price = this.productPrice
    this.product[i].category = this.productCategory
  }

}
