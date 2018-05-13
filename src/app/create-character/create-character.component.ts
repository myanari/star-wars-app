import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-create-character',
  templateUrl: './create-character.component.html'
})
export class CreateCharacterComponent implements OnInit {
  userWillAddOwnChar = false;

  constructor() {
  }

  ngOnInit() {
  }
}
