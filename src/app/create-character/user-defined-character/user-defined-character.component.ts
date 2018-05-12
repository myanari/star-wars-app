import { Component, OnInit, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CompleterService, CompleterData } from 'ng2-completer';

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
  completerData: CompleterData;
  characterName;
  selectedSide;
  sides;
  chars = [];

  constructor(swService: StarWarsService, httpClient: HttpClient, completerService: CompleterService) {
    this.swService = swService;
    this.httpClient = httpClient;
    this.completerData = completerService.local(this.chars, 'name', 'name');
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
          this.chars.push({ name: char.name, side: '' });
        });
      });
      page++;
    }
  }

  onSubmit(submittedForm) {
    if (submittedForm.invalid) { return; }
    const value = submittedForm.value;
    this.swService.addCharacter(value.name, value.side);
    this.swService.imageProvided.next(value.image);
  }


}
