import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';

@Injectable()
export class StarWarsService {
  private logService: LoggerService;
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

  constructor(logService: LoggerService) {
    this.logService = logService;
  }

  addCharacter(name, side, callbackError) { // The only function that touches possibleCharacters list
    const formattedName = name.toLowerCase().split(' ').join('-');
    // Chacking if character is valid (exists in possibleCharacters) or if it even exist
    const charAlreadyDisplayed = this.displayedCharacters.findIndex(char => char.name === name);
    console.log(charAlreadyDisplayed);
    if (charAlreadyDisplayed === -1) {
      callbackError(this.logService.logError(`Char ${name} is already being displayed`));
      return;
    }
    const charIsValid = this.possibleCharacters.findIndex(char => char.name === formattedName);
    if (charIsValid === -1) {
      callbackError(this.logService.logError(`Couldn't find char ${name}, try another name`));
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

  onSideChosen(charInfo) {
    const pos = this.displayedCharacters.findIndex((char) => char.name === charInfo.name);
    this.displayedCharacters[pos].side = charInfo.side;
    this.logService.logChange(`Side of ${charInfo.name} changed! New side: ${charInfo.side}`);
  }

}
