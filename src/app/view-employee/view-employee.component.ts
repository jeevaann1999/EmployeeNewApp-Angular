import { Component } from '@angular/core';

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.css']
})
export class ViewEmployeeComponent {
  empcode=""
  name=""
  designation=""
  salary=""
  companyName=""
  mobno=""
  username=""
  password=""

  employee:any=[{"id":1,"empcode":123,"name":"Jeeva","designation":"Software Engineer Trainee","salary":25000,"companyName":"Nest","mobno":"123456","username":"jeeva","password":"password"},{"id":2,"empcode":456,"name":"Ann","designation":"Software Engineer Trainee","salary":25000,"companyName":"Nest","mobno":"78901","username":"ann","password":"password"},{"id":3,"empcode":789,"name":"Neha","designation":"Software Engineer Trainee","salary":25000,"companyName":"Nest","mobno":"15678","username":"neha","password":"password"},{"id":4,"empcode":135,"name":"Mary","designation":"Software Engineer Trainee","salary":25000,"companyName":"Nest","mobno":"45672","username":"mary","password":"password"},{"id":5,"empcode":246,"name":"Noah","designation":"Software Engineer Trainee","salary":25000,"companyName":"Nest","mobno":"98765","username":"noah","password":"password"}]
}
