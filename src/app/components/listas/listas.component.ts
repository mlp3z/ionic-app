import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Lista } from 'src/app/models/lista.model';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styles: [],
})
export class ListasComponent implements OnInit {

    @Input() tabName:string;

    constructor(
        public todoService: TodoService,
        private router: Router
    ) { 

        // console.log(this.tabName);
    }
    ngOnInit() {}


    verLista(lista:Lista){
        // console.log(lista)
        this.router.navigateByUrl(`tabs/${this.tabName}/agregar/${lista.id}`);
    }

    eliminarLista(lista:Lista){
        this.todoService.eliminarLista(lista);
    }

}
