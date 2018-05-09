import { Component, OnInit } from '@angular/core';
import { StarWarsService } from '../star-wars.service';

@Component({
  selector: 'app-create-character',
  templateUrl: './create-character.component.html',
  styleUrls: ['./create-character.component.css']
})
export class CreateCharacterComponent implements OnInit {
  swService: StarWarsService;

  availableSides = [
    {display: 'None', value: ''},
    {display: 'Light', value: 'light'},
    {display: 'Dark', value: 'dark'}
  ];

  constructor(swService: StarWarsService) {
    this.swService = swService;
  }

  ngOnInit() {
  }

  onSubmit(submittedForm) {
    const value = submittedForm.value;
    this.swService.addCharacter(value.name, value.side);
  }

}
