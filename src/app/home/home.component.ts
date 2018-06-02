import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public invoiceForm: FormGroup;

    constructor(private _fb: FormBuilder) { }

    ngOnInit() {


      this.invoiceForm = this._fb.group({
        itemRows: this._fb.array([this.initItemRows()]),
            discount: [''],
            g_total: ['']

      });
    }

    /*
    This creates a new formgroup. You can think of it as adding an empty object
    into an array. So we are pushing an object to the formarray 'itemrows' that
    has the property 'itemname'. 
    */
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
        const control = <FormArray>this.invoiceForm.controls['itemRows'];
        control.push(this.initItemRows());
    }

    deleteRow(index: number) {
        const control = <FormArray>this.invoiceForm.controls['itemRows'];
        control.removeAt(index);
    }
       cal_total(value){
       	console.log(value);
       }

}
	