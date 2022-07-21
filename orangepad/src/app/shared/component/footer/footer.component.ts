import { Component, OnInit } from '@angular/core';
import { localString } from '../../../shared/utilites/string';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  STRINGS: any = localString;
  constructor() { }

  ngOnInit(): void {
  }

}
