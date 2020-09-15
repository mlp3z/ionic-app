import { Item } from './item.model';

export class Lista{

    id:number;
    titulo:string;
    fechaCreacion:Date;
    fechaCompletada:Date;
    terminada:boolean;
    items: Item[];

    constructor(titulo:string,){

        this.id = new Date().getTime();

        this.titulo = titulo;
        this.fechaCreacion= new Date();
        this.fechaCompletada= null;
        this.items = [];
        
    }

}