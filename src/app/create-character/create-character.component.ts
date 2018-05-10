import { Component, OnInit } from '@angular/core';
import { StarWarsService } from '../star-wars.service';
import { LoggerService } from '../logger.service';

@Component({
  selector: 'app-create-character',
  templateUrl: './create-character.component.html',
  styleUrls: ['./create-character.component.css']
})
export class CreateCharacterComponent implements OnInit {
  swService: StarWarsService;
  loggerService: LoggerService;
  selectedSide = '';
  allCharacters = [];

  availableSides = [
    {display: 'Choose Side', value: ''},
    {display: 'Light', value: 'light'},
    {display: 'Dark', value: 'dark'}
  ];

  constructor(swService: StarWarsService, loggerService: LoggerService) {
    this.swService = swService;
    this.loggerService = loggerService;
  }

  ngOnInit() {
    const allChars = this.swService.getAllPossibleCharacters();
    allChars.map((char) => {
      this.allCharacters.push(char);
    });
    console.log(this.allCharacters);
  }

  onSubmit(submittedForm) {
    if (submittedForm.invalid) { return; }
    const value = submittedForm.value;
    console.log(value);
    this.swService.addCharacter(value.name, value.side);
  }

  onChange(form) {
    this.selectedSide = form.value.side;
  }

}
