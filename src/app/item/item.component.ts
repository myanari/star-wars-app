import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() char;
  @Input() order;

  path = '';
  name = '';
  user = '';

  constructor() { }

  ngOnInit() {
    console.log(this.order);
    this.path = './assets/characters/' + this.char.name.toLowerCase() + '.svg';
    this.name = this.char.name.split('-').join(' ');

    const names = this.name.split(' ');
    if (names.length === 1 && names[0] !== 'bb8' && names[0] !== 'c3p0') {
      names.push(Math.floor(Math.random() * 100).toString());
    }
    this.user = names.join('');
  }

  onAssign(side: string) {
    this.char.side = side;
  }
}
