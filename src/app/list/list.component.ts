import { Component, OnInit, OnDestroy, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { StarWarsService } from '../star-wars.service';
import { ItemComponent } from '../item/item.component';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild(ItemComponent) listChild: ElementRef;
  characters = [];
  loadedSide = 'all';
  subscription;
  activatedRoute: ActivatedRoute;
  swService: StarWarsService;

  constructor(activatedRoute: ActivatedRoute, swService: StarWarsService) {
    this.activatedRoute = activatedRoute;
    this.swService = swService;
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params) => {
        this.characters = this.swService.getCharacters(params.side);
        this.loadedSide = params.side;
      }
    );
    this.subscription = this.swService.charactersChanged.subscribe(
      () => {
        this.characters = this.swService.getCharacters(this.loadedSide);
      }
    );
  }
  ngAfterViewInit() {
    console.log(this.listChild);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
