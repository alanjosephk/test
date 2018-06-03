import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
import {Router} from '@angular/router';
import { HomeService } from './home.service';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public detailsForm: FormGroup;

    constructor(private _fb: FormBuilder,private router: Router,private homeService:HomeService) { }

    ngOnInit() {


      this.detailsForm = this._fb.group({
        itemRows: this._fb.array([this.initItemRows()]),
            discount: [''],
            g_total: ['']

      });
    }

    initItemRows() {
        return this._fb.group({
            productname: [''],
            quantity: [''],
amount: [''],
tax: [''],
total: ['']
        });
    }

    addNewRow() {
        const control = <FormArray>this.detailsForm.controls['itemRows'];
        control.push(this.initItemRows());
    }

    deleteRow(index: number) {
        const control = <FormArray>this.detailsForm.controls['itemRows'];
        control.removeAt(index);
    }
     onSubmit(form){
this.homeService.bill_details(form);
  this.router.navigate(['bill']);

     }

}
	