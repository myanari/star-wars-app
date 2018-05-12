import { Component, OnInit, Input, Injectable } from '@angular/core';

import { StarWarsService } from '../star-wars.service';
import { ImageService } from '../image.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})

@Injectable()
export class ItemComponent implements OnInit {
  @Input() char;
  swService: StarWarsService;
  imageService: ImageService;

  path = '';
  name = '';
  user = '';

  constructor(swService: StarWarsService, imageService: ImageService) {
    this.swService = swService;
    this.imageService = imageService;
  }

  ngOnInit() {
    this.name = this.char.name.split('-').join(' ');

    const names = this.name.split(' ');

    if (names.length === 1 && names[0] !== 'bb8' && names[0] !== 'c3p0' && names[0] !== 'r2d2') {
      names.push(Math.floor(Math.random() * 100).toString());
    }

    this.user = names.join('');
    console.log('provider: ' + this.imageService.imageProvider);

    if (this.imageService.imageProvider === 'server') {
      this.path = `/assets/characters/${this.char.image}.svg`;
    } else {
      this.path = this.char.image || `/assets/characters/${this.char.image}.svg`;
    }
  }

  onAssign(side: string) {
    this.swService.onSideChosen({ name: this.char.name, side: side, image: this.char.image });
  }
}
