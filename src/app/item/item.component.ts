import {Component, OnInit, Input, Injectable } from '@angular/core';

import { StarWarsService } from '../star-wars.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})

@Injectable()
export class ItemComponent implements OnInit {
  @Input() isFirst;
  @Input() char;
  isFocused;
  swService: StarWarsService;
  isCustomImage;
  path = '';
  name = '';
  user = '';

  constructor(swService: StarWarsService) {
    this.swService = swService;
  }

  ngOnInit() {
    this.name = this.char.name.split('-').join(' ');

    const names = this.name.split(' ');

    if (names.length === 1 && names[0] !== 'bb8' && names[0] !== 'c3p0' && names[0] !== 'r2d2') {
      names.push(Math.floor(Math.random() * 100).toString());
    }
    this.user = names.join('');
    this.path = this.char.image;
    if (this.char.image === undefined) {
      this.path = `/assets/characters/${this.char.name}.svg`;
    }
    this.isCustomImage = !this.path.startsWith('/assets/characters');

    this.isFocused = this.isFirst && this.swService.userSubmitted;

    setTimeout(() => {
      this.isFirst = false;
      this.isFocused = this.isFirst && this.swService.userSubmitted;
    }, 1500);
  }

  onAssign(side: string) {
    this.swService.onSideChosen({ name: this.char.name, side: side, image: this.char.image });
  }
}
