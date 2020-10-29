import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-pagoonline',
  templateUrl: './pagoonline.page.html',
  styleUrls: ['./pagoonline.page.scss'],
})
export class PagoonlinePage implements OnInit {

  constructor(private route:Router) { }

  ngOnInit() {
  }
  moverenapp(){
  this.route.navigate(['/','']);
  }
}
