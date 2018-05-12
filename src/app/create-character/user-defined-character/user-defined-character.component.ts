import { Component, OnInit, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { CompleterService, CompleterData } from 'ng2-completer';

import { StarWarsService } from '../../star-wars.service';
import { Results, CharacterName } from './results.model';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';


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
  enteredCharacter = '';
  isImageRequired = true;
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
    this.swService.isImageRequired.subscribe(() => {
      this.isImageRequired = true;
      console.log(this.isImageRequired);
    });
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

  onInputChange(entered) {
    const formattedName = entered.toLowerCase().split(' ').join('-');
    this.httpClient.get('/assets/characters/' + formattedName + '.svg').subscribe(() => {},
      (err) => {
        if (err.status === 200) {
          this.isImageRequired = false;
          console.log(this.isImageRequired);
        } else {
          this.isImageRequired = true;
        }
    });
  }

  onSubmit(submittedForm) {
    if (submittedForm.invalid) { return; }
    const value = submittedForm.value;
    this.swService.addCharacter(value.name, value.side);
  }
}
