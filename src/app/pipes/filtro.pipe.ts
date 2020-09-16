import { Pipe, PipeTransform } from '@angular/core';
import { Lista } from '../models/lista.model';

@Pipe({
  name: 'filtro',
  pure: false //esto es para activar la deteccion de cambios cuando se realizan en otra pages
  //por defecto es true, osea que si la lista que pasa por el pipe es modificada en otra
  //pages cuando retorne aqui(sin recargar) el pipe no 'filtrara' de nuevo la lista
})
export class FiltroPipe implements PipeTransform {

    transform(pLista: Lista[], tabName:string): Lista[] {

        // console.log(pLista,tabName);
        // return pLista

        if(tabName=='tab1'){
            return pLista.filter(x => x.terminada === false);
        }
        else if(tabName=='tab2'){
            return pLista.filter(x => x.terminada === true);
        }
        else{
            return pLista
        }

    }

}
