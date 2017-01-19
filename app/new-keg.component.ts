import { Component, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component ({
  selector: 'new-keg',
  template: `

  <form>
    <h3>Add A New Keg</h3>
    <label for="beername">Beer Name:</label>
    <input #newBeerName>
    <label for="brewery">Brewery:</label>
    <input #newBrewery>
    <label for="price">Price:</label>
    <input #newPrice>
    <label for="alccont">ABV:</label>
    <input #newABV>
    <button type="button" (click)="submitForm(newBeerName.value, newBrewery.value, newPrice.value, newABV.value); kegFormShow()">Add Keg!</button>
  </form>
  `

})


export class NewKegComponent
{
  @Output() newKegSender = new EventEmitter();
  @Output() showKegSender = new EventEmitter();
  submitForm(beerName: string, brewery: string, price: number, alccont: number)
  {
    var newKeg: Keg = new Keg(beerName, brewery, price, alccont);
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
