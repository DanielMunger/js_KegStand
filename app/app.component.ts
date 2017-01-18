import { Component } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'app-root',
  template: `
  <h1>KegStand</h1>
  <keg-list [childKegList]="masterKegList" (clickSender)="editKeg($event)"></keg-list>
  <hr>
  <keg-edit [childSelectedKeg]="selectedKeg"></keg-edit>
  <button (click)="newKeg()" >Add a New Keg</button>
  <div *ngIf="newKegFormShow">
  <form (ngSubmit) ="onSubmit()" #kegForm="ngForm">
    <h3>Add A New Keg</h3>
    <label for="beername">Beer Name:</label>
    <input type="text" name="beername">
    <label for="brewery">Brewery:</label>
    <input name="brewery">
    <label for="price">Price:</label>
    <input name="price">
    <label for="alccont">ABV:</label>
    <input name="alccont">
    <button (click)="addKeg(beername, brewery, price, alccont)">Add Keg!</button>
    </form>
  </div>
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
    this.childSelectedKeg = clickedKeg;
  }
  editDone()
  {
    this.childSelectedKeg = null;
  }

  // newKegFormShow = null;
  // newKeg()
  // {
  //   this.newKegFormShow = true;
  // }
  // addKeg(beername: string, brewery: string, price: number, alccont: number)
  // {
  //   //kegToAdd: Keg = new Keg(beername, brewery, price, alccont);
  //   this.kegs.push(new Keg(beername, brewery, price, alccont));
  // }

}
