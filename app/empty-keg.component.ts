import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'empty-keg',
  template: `
  <h1>Kegs To Change</h1>
  <ul>
    <li *ngFor="let currentKeg of childKegList | emptykegs: refillLevel">{{currentKeg.name}}</li>
  </ul>
  `
})

export class EmptyKegComponent
{
  @Input() childKegList: Keg[];

  refillLevel: number = 10;
}
