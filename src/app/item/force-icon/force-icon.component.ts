import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-force-icon',
  templateUrl: 'force-icon.component.html'
})

export class ForceIconComponent{
  @Input() side;
}
