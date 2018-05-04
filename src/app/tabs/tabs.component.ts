import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {
  characters = [
    { name: 'Luke Skywalker', side: '' },
    { name: 'Rey', side: '' },
    { name: 'Darth Vader', side: '' },
    { name: 'Kylo Ren', side: '' },
  ];

  chosenTab = 'all';

  constructor() { }

  ngOnInit() {
  }

  onChoose(side) {
    this.chosenTab = side;
  }

  getCharacters() {
    if (this.chosenTab === 'all') {
      return this.chosenTab.slice();
    }

    return this.characters.filter((char) => {
      return char.side === this.chosenTab;
    });
  }
}
