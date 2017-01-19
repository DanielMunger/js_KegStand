import {Pipe, PipeTransform} from '@angular/core';
import {Keg} from './keg.model';

@Pipe({
 name: "kegflavor",
 pure: false
})

export class KegFlavorPipe implements PipeTransform {

  transform(input: Keg[], beerType) {
    var output: Keg[] = [];
    if(beerType === "all")
    {
      for(var i =0; i<input.length; i++)
      {
        output.push(input[i]);
      }
      return output;
    } else if(beerType === "Blonde"){
      for(var i =0; i<input.length; i++)
      {
        if(input[i].flavor === "Blonde")
        {
          output.push(input[i]);
        }
      }
      return output;
    } else if(beerType === "IPA"){
      for(var i =0; i<input.length; i++)
      {
        if(input[i].flavor === "IPA")
        {
          output.push(input[i]);
        }
      }
      return output;
    } else if(beerType === "Ale"){
      for(var i =0; i<input.length; i++)
      {
        if(input[i].flavor === "Ale")
        {
          output.push(input[i]);
        }
      }
      return output;
    } else if(beerType === "Stout"){
      for(var i =0; i<input.length; i++)
      {
        if(input[i].flavor === "Stout")
        {
          output.push(input[i]);
        }
      }
      return output;
    } else if(beerType === "Porter"){
      for(var i =0; i<input.length; i++)
      {
        if(input[i].flavor === "Porter")
        {
          output.push(input[i]);
        }
      }
      return output;
    }
  } 
}
