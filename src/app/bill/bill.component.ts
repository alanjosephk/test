import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home/home.service';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css']
})
export class BillComponent implements OnInit {

  constructor(private homeService:HomeService) { }
public bill:any=[];
  ngOnInit() {
  this.bill=this.homeService.get_bill();
  console.log(this.bill);
  }

}
