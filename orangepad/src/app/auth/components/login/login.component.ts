import { Component, OnInit } from '@angular/core';
import { localString } from '../../../shared/utilites/string';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  STRINGS: any = localString;
  formtitle = 'Login Your Account';

  constructor() { }

  ngOnInit(): void {
  }

}
