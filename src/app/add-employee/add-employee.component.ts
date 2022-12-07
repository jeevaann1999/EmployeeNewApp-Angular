import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {
  empcode=""
  name=""
  designation=""
  salary=""
  companyName=""
  mobno=""
  username=""
  password=""


  constructor(private api:ApiService){}

  readValues=()=>{
    let employee:any={
     "empcode":this.empcode,
     "name":this.name,
     "designation":this.designation,
     "salary":this.salary,
     "companyName":this.companyName,
     "mobno":this.mobno,
     "username":this.username,
     "password":this.password

    }
    console.log(employee)
    this.api.addEmployees(employee).subscribe(
      (response:any)=>{
        console.log(response)
      }
    )
  }
}
