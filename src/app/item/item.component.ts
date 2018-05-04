import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() char;
  @Output() sideAssigned = new EventEmitter<{name: string, side: string}>();

  path = '';
  name = '';
  user = '';

  constructor() { }

  ngOnInit() {
    this.path = './assets/characters/' + this.char.name.toLowerCase() + '.svg';
    this.name = this.char.name.split('-').join(' ');

    const names = this.name.split(' ');
    if (names.length === 1 && names[0] !== 'bb8' && names[0] !== 'c3p0' && names[0] !== 'r2d2') {
      names.push(Math.floor(Math.random() * 100).toString());
    }
    this.user = names.join('');
  }

  onAssign(side: string) {
    // this.char.side = side;
    this.sideAssigned.emit({name: this.char.name, side: side});
  }
}
