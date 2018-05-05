import { Component, OnInit, Input } from '@angular/core';

import { StarWarsService } from '../star-wars.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() char;
  swService: StarWarsService;

  path = '';
  name = '';
  user = '';

  constructor(swService: StarWarsService) {
    this.swService = swService;
  }

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
    this.swService.onSideChosen({name: this.char.name, side: side});
  }
}
