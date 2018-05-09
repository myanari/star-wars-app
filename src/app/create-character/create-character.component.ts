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
  addCharError;

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
  }

  onSubmit(submittedForm) {
    if (submittedForm.invalid) { return; }
    const value = submittedForm.value;
    this.swService.addCharacter(value.name, value.side, (err) => {
      this.addCharError = err;
    });
  }

  onChange(form) {
    this.selectedSide = form.value.side;
  }

}
