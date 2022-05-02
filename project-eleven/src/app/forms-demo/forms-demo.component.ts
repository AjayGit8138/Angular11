import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-forms-demo',
  templateUrl: './forms-demo.component.html',
  styleUrls: ['./forms-demo.component.css']
})
export class FormsDemoComponent implements OnInit {
    myform:FormGroup | any;
  constructor(private fb:FormBuilder) { 
    this.myform = this.fb.group({
      Username:[''],
      Email:[''],
      Regno:[''],
      Department:[''],
      
    })
  }

  ngOnInit(): void {
  }

}
