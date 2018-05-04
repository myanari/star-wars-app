import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {
  characters = [
    { name: 'yoda', side: '' },
    { name: 'darth-vader', side: '' },
  ];

  chosenTab = 'all';

  constructor() { }

  ngOnInit() {
  }

  onChoose(side) {
    this.chosenTab = side;
    console.log(this.chosenTab);
  }

  getCharacters() {
    if (this.chosenTab === 'all') {
      return this.characters.slice();
    }

    return this.characters.filter((char) => {
      return char.side === this.chosenTab;
    });
  }
}
