import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';


@Component({
  selector: 'keg-list',
  template: `
  <div class="kegs">
    <div class="row" *ngFor="let newKeg of childKegList">
      <div class="col m6 items">{{newKeg.name}}~{{newKeg.brand}} <br> ABV: {{newKeg.alccont}}%~$ {{newKeg.price}}<br>
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


}


// <a class="waves-effect waves-light btn"><i class="material-icons left">cloud</i>button</a>      //  <img src="./resources/images/keg.png" alt="beer glass" />
