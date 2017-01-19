import { Component, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component ({
  selector: 'new-keg',
  template: `

  <form>
    <h3>Add A New Keg</h3>
    <label for="beername">Beer Name:</label>
    <input type="text" required #newBeerName>
    <label for="brewery">Brewery:</label>
    <input type="text" required #newBrewery>
    <label for="flavor">Flavor:</label>
    <input type="text" required #newFlavor>
    <label for="price">Price:</label>
    <input type="number" required #newPrice>
    <label for="alccont">ABV:</label>
    <input type="number" required #newABV>
    <button type="button" (click)="submitForm(newBeerName.value, newBrewery.value, newPrice.value, newABV.value, newFlavor.value); kegFormShow()">Add Keg!</button>
  </form>
  `

})


export class NewKegComponent
{
  @Output() newKegSender = new EventEmitter();
  @Output() showKegSender = new EventEmitter();
  submitForm(beerName: string, brewery: string, price: number, alccont: number, flavor: string)
  {
    var newKeg: Keg = new Keg(beerName, brewery, price, alccont, flavor);
    this.newKegSender.emit(newKeg);
  }
  showKegBool: boolean = true;
  kegFormShow()
  {
    this.showKegBool = false;
    console.log(this.showKegBool);
    this.showKegSender.emit(this.showKegBool);
  }
}
