import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hello-button',
  templateUrl: './hello-button.component.html',
  styleUrls: ['./hello-button.component.css']
})
export class HelloButtonComponent implements OnInit {
  @Input() name: string;

  constructor() { }

  ngOnInit() {
  }

}
