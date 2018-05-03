import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-choose-side',
  templateUrl: './choose-side.component.html'
})

export class ChooseSideComponent {
  @Input() side;

  getColorOfSide() {
    return this.side === 'light' ? 'cornflowerblue' : '#F44336';
  }
}
