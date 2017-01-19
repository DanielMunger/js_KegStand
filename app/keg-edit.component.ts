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
    <label>Flavor:</label>
    <input [(ngModel)]="childSelectedKeg.flavor">
    <label>ABV:</label>
    <input [(ngModel)]="childSelectedKeg.alccont">
    <label>Price:</label>
    <input [(ngModel)]="childSelectedKeg.price">
    <button (click)="doneButtonClicked()">Done</button>
  </div>
  `
})

export class KegEditComponent
{
  @Output() doneClickedSender = new EventEmitter;
  @Input() childSelectedKeg: Keg;

  doneButtonClicked()
  {
    this.doneClickedSender.emit();
  }
}
