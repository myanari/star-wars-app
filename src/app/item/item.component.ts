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

  imgProvider;
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
    this.imgProvider = this.imageService.imageProvider;
    this.user = names.join('');
    if (this.imageService.imageProvider === 'user') {
      if (this.imageService.photo === null) {
        this.path = '/assets/characters/' + this.char.name + '.svg';
      } else {
        this.path = this.char.image;
      }
    } else {
      this.path = this.char.image;
    }
    console.log(this.char.image, this.char.name);
  }

  onAssign(side: string) {
    this.swService.onSideChosen({ name: this.char.name, side: side, image: this.char.image });
  }
}
