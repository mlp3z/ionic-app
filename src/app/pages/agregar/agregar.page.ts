import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Item } from 'src/app/models/item.model';
import { Lista } from 'src/app/models/lista.model';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.page.html',
  styleUrls: ['./agregar.page.scss'],
})
export class AgregarPage{

    lista:Lista;
    nombreItem:string;

    constructor(
        private todoService:TodoService,
        private activatedRoute:ActivatedRoute
    ) { 

        const listaId = this.activatedRoute.snapshot.paramMap.get('listaId')

        this.lista = this.todoService.obtenerLista(listaId);

        // console.log(this.lista)
    }

    agregarItem(){
        
        if(this.nombreItem.length === 0){
            return;
        }

        const nuevoItem = new Item(this.nombreItem);

        this.lista.items.push(nuevoItem);

        this.nombreItem = '';

        this.todoService.guardarStorage();
    }


    changeCheck(item:Item){
        
        // console.log(item);

        const countPendientes = this.lista.items.filter(x=>!x.completado).length;
        // console.log({countPendientes});

        if(countPendientes === 0){
            this.lista.fechaCompletada = new Date();
            this.lista.terminada = true;
        }
        else{
            this.lista.fechaCompletada = null;
            this.lista.terminada = false;
        }

        this.todoService.guardarStorage();
    }


    eliminarItem(index:number){
        // console.log(index);
        this.lista.items.splice(index,1);
        this.todoService.guardarStorage();
    }



}
