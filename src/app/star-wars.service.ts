import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';
import { Subject } from 'rxjs/Subject';
import 'rxjs/operator/map';

@Injectable()
export class StarWarsService {
  charactersChanged = new Subject<void>();
  private logService: LoggerService;
  private usersOwnCharacters = [];
  private possibleCharacters = [
    { name: 'admiral-ackbar', side: '' },
    { name: 'bb8', side: '' },
    { name: 'boba-fett', side: '' },
    { name: 'c3p0', side: '' },
    { name: 'captain-phasma', side: '' },
    { name: 'chewbacca', side: '' },
    { name: 'clone-trooper', side: '' },
    { name: 'darth-maul', side: '' },
    { name: 'darth-vader', side: '' },
    { name: 'emperor-palpatine', side: '' },
    { name: 'ewok', side: '' },
    { name: 'finn', side: '' },
    { name: 'general-hux', side: '' },
    { name: 'general-leia', side: '' },
    { name: 'greedo', side: '' },
    { name: 'han-solo', side: '' },
    { name: 'jabba-the-hutt', side: '' },
    { name: 'jango-fett', side: '' },
    { name: 'jawa', side: '' },
    { name: 'kylo-ren', side: '' },
    { name: 'lando-calrissian', side: '' },
    { name: 'lobot', side: '' },
    { name: 'luke-skywalker', side: '' },
    { name: 'maz-kanata', side: '' },
    { name: 'obiwan-kenobi', side: '' },
    { name: 'poe-dameron', side: '' },
    { name: 'princess-leia', side: '' },
    { name: 'qui-gon-jinn', side: '' },
    { name: 'r2d2', side: '' },
    { name: 'red-five', side: '' },
    { name: 'rey', side: '' },
    { name: 'stormtrooper', side: '' },
    { name: 'tusken-raider', side: '' },
    { name: 'yoda', side: '' }
  ];
  private displayedCharacters = [
    {name: 'c3p0', side: ''},
    {name: 'han-solo', side: ''}
  ];

  availableSides = [
    {display: 'Choose Side', value: ''},
    {display: 'Light', value: 'light'},
    {display: 'Dark', value: 'dark'}
  ];

  constructor(logService: LoggerService) {
    this.logService = logService;
  }

  getSides() {
    return this.availableSides;
  }

  addCharacter(name, side) { // The only function that touches possibleCharacters list
    const formattedName = name.toLowerCase().split(' ').join('-');
    // Chacking if character is valid (exists in possibleCharacters) or if it even exist
    const charAlreadyDisplayed = this.displayedCharacters.findIndex(char => char.name === name);
    if (charAlreadyDisplayed !== -1) {
      return;
    }
    const newChar = {name: formattedName, side: side};
    this.displayedCharacters.push(newChar);
  }

  getCharacters(chosenTab) {
    if (chosenTab === 'all') {
      return this.displayedCharacters.slice();
    }
    return this.displayedCharacters.filter((char) => char.side === chosenTab);
  }

  getAllPossibleCharacters() {
    return this.possibleCharacters;
  }

  onSideChosen(charInfo) {
    const pos = this.displayedCharacters.findIndex((char) => char.name === charInfo.name);
    this.displayedCharacters[pos].side = charInfo.side;
    this.charactersChanged.next();
    this.logService.logChange(`Side of ${charInfo.name} changed! New side: ${charInfo.side}`);
  }

}
