import { Component } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'app-root',
  template: `
  <nav>
   <div class="nav-wrapper">
     <a href="#" class="brand-logo">KegStand</a>
     <ul id="nav-mobile" class="right hide-on-med-and-down">
       <li><a href="sass.html">Link1</a></li>
       <li><a href="badges.html">Link2</a></li>
       <li><a href="collapsible.html">LInk3</a></li>
     </ul>
   </div>
 </nav>
  <div class="container">
    <keg-list [childKegList]="masterKegList" (clickSender)="editKeg($event)"></keg-list>
    <hr>
    <keg-edit [childSelectedKeg]="selectedKeg" (doneClickedSender)="editDone()"></keg-edit>
    <hr><br>
    <button (click)="kegFormShow()">Add A New Keg</button>
    <new-keg *ngIf="showKeg" class="newkeg" (newKegSender)="newKeg($event)" (showKegSender)="kegFormHide($event)"></new-keg>
    <empty-keg [childKegList]="masterKegList">hello</empty-keg>
  </div>
  `
})

export class AppComponent {
  masterKegList: Keg[] = [
    new Keg("Lil Suptim'", "Lagunitas", 6, 5.5),
    new Keg("90 Schillings", "Odell", 5.50, 6.0),
    new Keg("ABC Blonde", "ABC", 7.50, 7.0)
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
  showKeg: boolean = false;
  kegFormShow()
  {
    this.showKeg = true;
  }
  kegFormHide(kegBool: boolean)
  {
    this.showKeg = kegBool;
  }
}
