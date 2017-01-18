import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h1>KegStand</h1>
  <ul>
    <h3 *ngFor="let newKeg of kegs">{{newKeg.name}} from: {{newKeg.brand}} ABV%: {{newKeg.alccont}} Price: {{newKeg.price}} dollars.<button (click)="editKeg(newKeg)">Edit Keg</button></h3>
  </ul>
  <hr>
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
  <button (click)="newKeg()" >Add a New Keg</button>
  <div *ngIf="newKegFormShow">
    <h3>Add A New Keg</h3>
    <label>Beer Name:</label>
    <input type="text" name="beer-name">
    <label>Brewery:</label>
    <input name="brewery">
    <label>Price:</label>
    <input name="price">
    <label>ABV:</label>
    <input name="alccont">
    <button (click)="addKeg(beername, brewery, price, alccont)">Add Keg!</button>
  </div>
  `
})
export class AppComponent {
  kegs: Keg[] = [
    new Keg("Lil Suptim'", "Lagunitas", 6, 5.5),
    new Keg("90 Schillings", "Odell", 5.50, 6.0)
  ];

  newKegFormShow = null;
  selectedKeg = null;
  newKeg()
  {
    this.newKegFormShow = true;
  }
  addKeg(beername: string, brewery: string, price: number, alccont: number)
  {
    //kegToAdd: Keg = new Keg(beername, brewery, price, alccont);
    this.kegs.push(new Keg(beername, brewery, price, alccont));
  }
  editKeg(clickedKeg)
  {
    this.selectedKeg = clickedKeg;
  }
  editDone()
  {
    this.selectedKeg = null;
  }
}
export class Keg
{
  constructor(public name: string, public brand: string, public price: number, public alccont: number)
  {

  }
}
