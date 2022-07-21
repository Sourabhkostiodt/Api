import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,FormControl,Validators,FormArray}  from "@angular/forms"

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private formBuilder : FormBuilder) { }

  ngOnInit(): void {}
  }


