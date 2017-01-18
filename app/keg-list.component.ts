import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';


@Component({
  selector: 'keg-list',
  template: `
  <ul>
    <h3 *ngFor="let newKeg of childKegList">{{newKeg.name}}// {{newKeg.brand}}//ABV: {{newKeg.alccont}}%//$ {{newKeg.price}}//Pints Left: {{newKeg.pints}}
    <button (click)="editButtonHasBeenClicked(newKeg)">Edit Keg</button><button (click)="pintSold(newKeg)">Pint Sold</button></h3>
  </ul>
  `
})

export class KegListComponent
{
  @Input() childKegList: Keg[];
  @Output() clickSender = new EventEmitter();

  editButtonHasBeenClicked(kegToEdit: Keg) {
    this.clickSender.emit(kegToEdit);
  }
  pintSold(kegToDecreasePints)
  {
    kegToDecreasePints.pints = kegToDecreasePints.pints -1;
  }
}
