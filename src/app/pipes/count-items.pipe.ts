import { Pipe, PipeTransform } from '@angular/core';
import { Lista } from '../models/lista.model';

@Pipe({
  name: 'countItems',
  pure: false 
})
export class CountItemsPipe implements PipeTransform {

    roundToTwo(num:number) {    
        return Math.round( ( num + Number.EPSILON ) * 100 ) / 100
    }

    transform(pLista: Lista, estado:string = null): number {

        const total = pLista.items.length;
        const pendientes = pLista.items.filter(x => x.completado === false).length
        const completadas = pLista.items.filter(x => x.completado === true).length;

        switch(estado){
            case 'pendientes_count':
                return pendientes
            case 'completadas_count':
                return completadas
            case 'pendientes_percent':
                return this.roundToTwo(pendientes / total)
            case 'completadas_percent':
                return this.roundToTwo(completadas / total)
            default:
                return total
            
        }



        // if(tabName=='tab1'){
        //     return pLista.items.filter(x => x.completado === false).length;
        // }
        // else if(tabName=='tab2'){
        //     return pLista.items.filter(x => x.completado === true).length;
        // }
        // else{
        //     return pLista.items.length
        // }

    }

}
