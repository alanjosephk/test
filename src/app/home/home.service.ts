import { Injectable } from '@angular/core';
@Injectable()
export class HomeService {
	constructor() { }
	public bill:any=[];
	 bill_details(form){
this.bill=form;
  }
  get_bill(){
  return this.bill;
  }
}