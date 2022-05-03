import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterEvent } from '@angular/router';
import { routeanimation } from 'src/router.animation';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.css'],
  animations:[routeanimation]
})
export class LinksComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  getanimation(outlet:any)
  {
    return outlet.activatedRouteData['depth'];
  }
}
