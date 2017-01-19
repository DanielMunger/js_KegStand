import {Pipe, PipeTransform} from '@angular/core';
import {Keg} from './keg.model';

@Pipe({
  name: "emptykegs",
  pure: false
})

export class EmptyKegPipe implements PipeTransform
{
  transform(input: Keg[], refillLevel)
  {

    var output: Keg[] = [];
    for(var i = 0; i< input.length; i++)
    {
      if(input[i].pints<= refillLevel)
      {
        
        output.push(input[i]);
      }
    }
    return output;
  }
}
