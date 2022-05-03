import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  itemImageUrl = '../images/angular.svg';
  skills='../images/skills.png';
  angularbanner = '../images/webbanner.jpg';
  setbool:boolean = true;
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  navigate()
  {
    this.setbool = false;
  }
}
