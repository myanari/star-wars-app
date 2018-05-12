import { Component, OnInit, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CompleterService, CompleterData } from 'ng2-completer';

import { StarWarsService } from '../../star-wars.service';
import { Results, CharacterName } from './results.model';
import { ImageService } from '../../image.service';

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
  imageService: ImageService;
  completerData: CompleterData;
  isImageRequired = true;
  selectedSide;
  sides;
  chars = [];

  constructor(
    swService: StarWarsService,
    httpClient: HttpClient,
    completerService: CompleterService,
    imageService: ImageService
  ) {
    this.swService = swService;
    this.httpClient = httpClient;
    this.imageService = imageService;
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

  onInputChange(entered) {
    const formattedName = entered.toLowerCase().split(' ').join('-');
    this.httpClient.get('/assets/characters/' + formattedName + '.svg')
      .subscribe(
        () => {},
      (err) => {
        this.isImageRequired = err.status !== 200;
    });
  }

  onSubmit(submittedForm) {
    if (submittedForm.invalid) { return; }
    const value = submittedForm.value;
    this.swService.addCharacter(value.name, value.side, value.image);
    console.log(submittedForm.value.image);
  }
}
