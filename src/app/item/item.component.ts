import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() char;

  path = '';
  name = ''; // luke skywalker

  constructor() { }

  ngOnInit() {
    this.path = './assets/characters/' + this.char.name.toLowerCase() + '.svg';
    this.name = this.char.name.split('-').join(' ');
  }
}
