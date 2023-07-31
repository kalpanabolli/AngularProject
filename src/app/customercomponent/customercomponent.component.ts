import { Component } from '@angular/core';

@Component({
  selector: 'app-customercomponent',
  templateUrl: './customercomponent.component.html',
  styleUrls: ['./customercomponent.component.css']
})
export class CustomercomponentComponent {
customer:Customer= new Customer();
customrList:Customer[]=[];
mode:string='create';
SubmitData(){
this.customrList.push(this.customer);
this.mode='list';
}
ChangeToEdit(){
  this.mode='edit';
  this.customer=this.customrList[0];
}
Customerlist(){
  this.mode='list';
}
DeleteCustomer(){
  this.customrList=[];
  this.mode='list';
}
}

export class Customer{
  firstname!:string;
  lastname!:string;
  address!:string;
  city!:string;
  state!:string;
 
}
