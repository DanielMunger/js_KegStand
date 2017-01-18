import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';


@Component({
  selector: 'keg-edit',
  template: `
  <div *ngIf="childSelectedKeg">
    <h4>Edit Keg</h4>
    <label>Beer Name:</label>
    <input [(ngModel)]="childSelectedKeg.name">
    <label>Brewery:</label>
    <input [(ngModel)]="childSelectedKeg.brand">
    <label>ABV:</label>
    <input [(ngModel)]="childSelectedKeg.alccont">
    <label>Price:</label>
    <input [(ngModel)]="childSelectedKeg.price">
    <button (click)="editDone()">Done</button>
  </div>
  `
})

export class KegEditComponent
{

  @Input() childSelectedKeg: Keg;
}
