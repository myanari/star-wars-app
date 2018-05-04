import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {
  characters = [];
  chosenTab = 'all';

  constructor() { }

  ngOnInit() {
  }

  onChoose(side) {
    this.chosenTab = side;
    console.log(this.chosenTab);
  }

  getCharacters() {

  }

  onSideChosen(charSide) {
    const pos = this.characters.findIndex((char) => {
      return char.name === charSide.name;
    });
    this.characters[pos].side = charSide.side;
  }
}
