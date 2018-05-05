export class StarWarsService {
  private characters = [
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

  getCharacters(chosenTab) {
    if (chosenTab === 'all') {
      return this.characters.slice();
    }

    return this.characters.filter((char) => {
      return char.side === chosenTab;
    });
  }

  onSideChosen(charSide) {
    const pos = this.characters.findIndex((char) => {
      return char.name === charSide.name;
    });
    this.characters[pos].side = charSide.side;
  }
}
