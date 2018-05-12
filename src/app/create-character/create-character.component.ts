import { Component, OnInit } from '@angular/core';
import { StarWarsService } from '../star-wars.service';
import { LoggerService } from '../logger.service';

@Component({
  selector: 'app-create-character',
  templateUrl: './create-character.component.html',
  styleUrls: ['./create-character.component.css']
})
export class CreateCharacterComponent implements OnInit {
  userWillAddOwnChar = false;

  constructor() {
  }

  ngOnInit() {
  }
}
