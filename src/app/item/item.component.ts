import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { StarWarsService } from '../star-wars.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() char;
  swService: StarWarsService;
  http: HttpClient;

  path = '';
  name = '';
  user = '';

  constructor(swService: StarWarsService, http: HttpClient) {
    this.swService = swService;
    this.http = http;
  }

  ngOnInit() {
    this.getImagePath();
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

  getImagePath() {
    const lowerCaseChar = this.char.name.toLowerCase();
    this.http.get('/assets/characters/' + lowerCaseChar + '.svg')
      .subscribe(() => {},
      (err) => {
        if (err.status === 200) {
          this.path = '/assets/characters/' + lowerCaseChar + '.svg';
        } else {
          this.path = '/assets/characters/' + lowerCaseChar + '.svg';
          this.swService.imageProvided.subscribe(image => {
            this.path = image;
          });
        }
      });
  }
}
