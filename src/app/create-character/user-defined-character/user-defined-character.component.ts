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
  sides;
  chars = [];

  constructor(swService: StarWarsService, httpClient: HttpClient) {
    this.swService = swService;
    this.httpClient = httpClient;
  }

  ngOnInit() {
    this.sides = this.swService.getSides();
    this.getCharacters();
  }

  fetchCharacters(page) {
    return this.httpClient.get(`https://swapi.co/api/people/?page=${page}`);
  }

  getCharacters() {
    let page = 1;
    while (page < 10) {
      this.fetchCharacters(page).subscribe((data: Results) => {
        data.results.map((char: CharacterName) => {
          this.chars.push(char.name);
        })
      })
      page++;
    }
  }
}
