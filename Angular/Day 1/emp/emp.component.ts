import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emp',
  templateUrl: './emp.component.html',
  styleUrls: ['./emp.component.scss']
})
export class EmpComponent implements OnInit {
  id = 12345;
  name ="Maneesh";
  job ="Software Developer"
  salary=75000;
  deptNo=10;
  image="../../assets/angular.png"
  constructor() { }

  ngOnInit(): void {

  }

}
