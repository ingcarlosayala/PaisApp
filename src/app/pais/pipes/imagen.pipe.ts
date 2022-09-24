import { Pipe, PipeTransform } from '@angular/core';
import { Pais } from '../interfaces/pais.interfaces';

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform(pais: Pais) {
    return pais.flags.png;
  }

}
