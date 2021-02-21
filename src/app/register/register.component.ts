import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http'
import { UserserviceService } from '../userservice.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm!: FormGroup;
  userData: any;
  constructor(private fb: FormBuilder,private user: UserserviceService){}
  
  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.registerForm = this.fb.group({
      id: ["", Validators.required],
      name: ["", Validators.required],
      email: ["", Validators.required],
      status: ["", Validators.required],
      // name: ["", Validators.required],
    });
  }

  onSubmit(){
    this.userData = this.registerForm.value;
    console.log(this.userData);
    this.user.postData(this.userData);
  }
}
