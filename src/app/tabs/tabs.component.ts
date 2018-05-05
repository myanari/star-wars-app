import { Component, OnInit } from '@angular/core';
import { StarWarsService } from '../star-wars.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {
  characters = [];
  chosenTab = 'all';
  swService: StarWarsService;

  constructor(swService: StarWarsService) {
    this.swService = swService;
  }

  ngOnInit() {
  }

  onChoose(side) {
    this.chosenTab = side;
    console.log(this.chosenTab);
  }

  getCharacters() {
    this.characters = this.swService.getCharacters(this.chosenTab);
    return this.characters;
  }
}
