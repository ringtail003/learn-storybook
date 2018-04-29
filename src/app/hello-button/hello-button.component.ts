import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-hello-button',
  templateUrl: './hello-button.component.html',
  styleUrls: ['./hello-button.component.css']
})
export class HelloButtonComponent implements OnInit {
  @Input() name: string;
  @Output() hello = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  click() {
    this.hello.emit(`Hello ${this.name}`);
  }

}
