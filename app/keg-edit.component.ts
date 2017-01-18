import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';


@Component({
  selector: 'keg-edit',
  template: `
  <div *ngIf="selectedKeg">
    <h4>Edit Keg</h4>
    <label>Beer Name:</label>
    <input [(ngModel)]="selectedKeg.name">
    <label>Brewery:</label>
    <input [(ngModel)]="selectedKeg.brand">
    <label>ABV:</label>
    <input [(ngModel)]="selectedKeg.alccont">
    <label>Price:</label>
    <input [(ngModel)]="selectedKeg.price">
    <button (click)="editDone()">Done</button>
  </div>
  `
})

export class KegEditComponent
{
  
  @Input() childSelectedKeg: Keg;
}
