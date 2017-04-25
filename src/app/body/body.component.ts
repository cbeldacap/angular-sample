import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  counter: number;
  constructor() {
    this.counter = 0;
  }

  ngOnInit() {
  }

  up() {
    this.counter ++;
  }

  down() {
    this.counter --;
  }

}
