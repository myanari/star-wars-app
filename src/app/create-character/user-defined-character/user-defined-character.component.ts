import { Component, OnInit, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { StarWarsService } from '../../star-wars.service';
import { Results, CharacterName } from './results.model';


@Component({
  selector: 'app-user-defined-character',
  templateUrl: './user-defined-character.component.html',
  styleUrls: ['./user-defined-character.component.css']
})

@Injectable()
export class UserDefinedCharacterComponent implements OnInit {
  swService: StarWarsService;
  httpClient: HttpClient;
  selectedSide;
  sides;
  chars = [];

  constructor(swService: StarWarsService, httpClient: HttpClient) {
    this.swService = swService;
    this.httpClient = httpClient;
  }

  ngOnInit() {
    this.sides = this.swService.getSides();
    this.fetchCharacters();
  }

  fetchCharacters() {
    let page = 1;
    while (page < 10) {
      this.httpClient.get(`https://swapi.co/api/people/?page=${page}`).subscribe((data: Results) => {
        data.results.map((char: CharacterName) => {
          this.chars.push(char.name);
        });
      });
      page++;
    }
  }

  onSubmit(submittedForm) {
    if (submittedForm.invalid) { return; }
    const value = submittedForm.value;
    this.swService.addCharacter(value.name, value.side);
  }
}
