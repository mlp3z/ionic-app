import { Injectable } from '@angular/core';
import { Lista } from '../models/lista.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

    listas: Lista[] = [];

    constructor() { 
        // console.log('constructor TodoService')

        // const lista1 = new Lista('estudiar tech backend');
        // const lista2 = new Lista('estudiar tech fronted');
        // this.listas.push(lista1,lista2);
        // console.log(this.listas);

        this.cargarStorage();
    }

    guardarStorage(){
        localStorage.setItem('ionic-app-data', JSON.stringify(this.listas));
    }

    cargarStorage(){

        if(localStorage.getItem('ionic-app-data'))
            this.listas = JSON.parse(localStorage.getItem('ionic-app-data'))
    }



    crearLista(titulo:string){

        const nuevaLista = new Lista(titulo);
        this.listas.push(nuevaLista);
        this.guardarStorage();

        return nuevaLista.id;
    }


    obtenerLista(id:string|number){

        id = Number(id);

        let listaSearch = this.listas.find( x => x.id === id );

        return listaSearch;
    }


    eliminarLista(lista:Lista){

        this.listas = this.listas.filter(x => x.id != lista.id);
        this.guardarStorage();
    }
    

    editarLista(id:string|number,titulo:string){
        // console.log(id,titulo);

        let listaSearch = this.listas.find(x => x.id===id)
        // console.log(listaSearch)

        listaSearch.titulo = titulo;
        // console.log(listaSearch)

        this.guardarStorage();

    }



}
