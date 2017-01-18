import { Component } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'app-root',
  template: `
  <h1>KegStand</h1>
  <keg-list [childKegList]="masterKegList" (clickSender)="editKeg($event)"></keg-list>
  <hr>
  <keg-edit [childSelectedKeg]="selectedKeg" (doneClickedSender)="editDone()"></keg-edit>

  <new-keg (newKegSender)="newKeg($event)"></new-keg>
  `
})

export class AppComponent {
  masterKegList: Keg[] = [
    new Keg("Lil Suptim'", "Lagunitas", 6, 5.5),
    new Keg("90 Schillings", "Odell", 5.50, 6.0)
  ];
  selectedKeg = null;
  editKeg(clickedKeg)
  {
    this.selectedKeg = clickedKeg;
  }
  editDone()
  {
    this.selectedKeg = null;
  }
  newKeg(newKegFromChild: Keg)
  {
    this.masterKegList.push(newKegFromChild);
  }
}
