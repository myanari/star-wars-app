import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hamburger-menu',
  templateUrl: './hamburger-menu.component.html',
  styleUrls: ['./hamburger-menu.component.css']
})

export class HamburgerMenu {
  @Input() isActive;
}