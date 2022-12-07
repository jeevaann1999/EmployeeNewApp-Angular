import { Component } from '@angular/core';

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
  }
}
