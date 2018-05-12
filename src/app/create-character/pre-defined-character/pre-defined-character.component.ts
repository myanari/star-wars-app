import { Component, OnInit } from '@angular/core';
import { StarWarsService } from '../../star-wars.service';

@Component({
  selector: 'app-pre-defined-character',
  templateUrl: './pre-defined-character.component.html',
  styleUrls: ['./pre-defined-character.component.css']
})
export class PreDefinedCharacterComponent implements OnInit {
  swService: StarWarsService;
  selectedSide = '';
  allCharacters = [];

  constructor(swService: StarWarsService) {
    this.swService = swService;
  }

  ngOnInit() {
    const allChars = this.swService.getAllPossibleCharacters();
    allChars.map((char) => {
      this.allCharacters.push(char);
    });
  }

  getSides() {
    return this.swService.getSides();
  }

  onSubmit(submittedForm) {
    if (submittedForm.invalid) { return; }
    const value = submittedForm.value;
    this.swService.addCharacter(value.name, value.side);
  }
}
