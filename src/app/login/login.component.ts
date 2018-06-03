import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 loginForm: FormGroup;
  constructor(private router: Router,private _fb: FormBuilder) { }

  ngOnInit() {

  	   this.loginForm = this._fb.group({
      name: ['', Validators.required ],
      email: '',
    });
  }
 
  onSubmit(form) {console.log(form.value);
if(form.value.name =="alan"&&form.value.email=="alanjsp@gmail.com"){
	this.router.navigate(['home']);
}
   }
}
