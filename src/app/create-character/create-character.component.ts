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
  userWillAddOwnChar = false;
  allCharacters = [];

  getSides() {
    return this.swService.getSides();
  }

  constructor(swService: StarWarsService, loggerService: LoggerService) {
    this.swService = swService;
    this.loggerService = loggerService;
  }

  ngOnInit() {
    const allChars = this.swService.getAllPossibleCharacters();
    allChars.map((char) => {
      this.allCharacters.push(char);
    });
  }

  onSubmit(submittedForm) {
    if (submittedForm.invalid) { return; }
    const value = submittedForm.value;
    this.swService.addCharacter(value.name, value.side);
  }

  onChange(form) {
    this.selectedSide = form.value.side;
  }

  onAddOwnCharacter() {
    this.userWillAddOwnChar = true;
  }
}
