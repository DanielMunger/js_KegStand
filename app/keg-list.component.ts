import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';


@Component({
  selector: 'keg-list',
  template: `
  <div class="kegs">
      <select class="dropDown" (change)="onChange($event.target.value)" >
        <option value="all" selected="selected">All beers</option>
        <option value="IPA">IPA</option>
        <option value="Blonde">Blonde</option>
        <option value="Porter">Porter</option>
        <option value="Stout">Stout</option>
        <option value="Ale">Ale</option>
      </select>
    <div class="row" *ngFor="let newKeg of childKegList | kegflavor:filterByFlavor">
      <div class="col m6 items"><span [class]="kegPrice(newKeg)">{{newKeg.name}}</span>~{{newKeg.brand}}~{{newKeg.flavor}} <br> ABV: {{newKeg.alccont}}%~$ {{newKeg.price}}<br>
      Pints Left: {{newKeg.pints}}
      </div>
      <div class="col m4">
      <button class="waves-effect waves-light btn" (click)="editButtonHasBeenClicked(newKeg)">Edit Keg</button><button class="waves-effect waves-light btn" (click)="pintSold(newKeg)">Pint Sold</button>
      </div>
      <div class="col m2">
      <div [class]="kegLevel(newKeg)"><img src="./resources/images/keg.png" alt="beer glass"></div>
      </div>
    </div>
  </div>

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
  filterByFlavor= "all";
  
  onChange(optionFromMenu) {
    this.filterByFlavor = optionFromMenu;
  }

  fillLevel= null;
  kegLevel(currentKeg)
  {
    if(currentKeg.pints>=90)
    {
      return 'refill-green';
    }else if(currentKeg.pints>=45 && currentKeg.pints<90)
    {
      return 'refill-yellow';
    }else if(currentKeg.pints<45)
    {
      return 'refill-red';
    }
  }
  kegPrice(currentKeg)
  {
    if(currentKeg.price>=5)
    {
      return 'price-pink';
    }else if(currentKeg.price<5)
    {
      return 'price-green';
    }
  }

}
