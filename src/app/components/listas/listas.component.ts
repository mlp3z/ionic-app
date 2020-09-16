import { Component, Input, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, IonItemSliding, IonLabel, IonList } from '@ionic/angular';
import { Lista } from 'src/app/models/lista.model';
import { TodoService } from 'src/app/services/todo.service';

//viewchild
//https://fireship.io/snippets/using-viewchild-in-ionic-4-to-call-component-methods/

@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styles: [],
})
export class ListasComponent implements OnInit {

    @Input() tabName:string;
    

    constructor(
        public todoService: TodoService,
        private router: Router,
        private alertController:AlertController
    ) { 
        
        // console.log(this.tabName);
    }
    ngOnInit() {}


    verLista(lista:Lista){
        // console.log(lista)
        this.router.navigateByUrl(`tabs/${this.tabName}/agregar/${lista.id}`);
    }

    async eliminarLista(lista:Lista){

        let alert = await this.alertController.create({
            header: 'Confirmar',
            message: `Seguro que desea eliminar la lista: ${lista.titulo}`,
            buttons: [
                {
                    text:'Cancelar',
                    role: 'cancel',
                    handler:()=>{
                        this.ionListViewChild.closeSlidingItems();
                    }
                },
                {
                    text: 'Eliminar',
                    handler: () => {
                        this.todoService.eliminarLista(lista);

                        this.ionListViewChild.closeSlidingItems();
                    }
                }
            ]
        })

        alert.present();
        
    }

    async editarLista(lista:Lista){
        
        //this.ionList.closeSlidingItems();

        const alert = await this.alertController.create({
            header: 'Editar Lista',
            inputs:[{
                name: 'titulo',
                type:'text',
                value:lista.titulo,
                placeholder:'nombre de la lista'
            }],
            buttons:[{
                text:'Cancelar',
                role: 'cancel',
                handler:()=>{
                    this.ionListViewChild.closeSlidingItems();
                }
            },
            {
                text:'Guardar',
                handler:(data)=>{
                    // console.log(data);
                    if(data.titulo.length===0){
                        return;
                    }

                    this.todoService.editarLista(lista.id,data.titulo);

                    this.ionListViewChild.closeSlidingItems();
                }
            }
            ]
        });

        alert.present();
    }


    //cerrar el slinding recibiendolo en un metodo
    // closeSliding(slidingItem:IonItemSliding){
    //     // console.log(slidingItem);
    //     slidingItem.close()
    // }

    //PARA QUE FUNCIONE EL ViewChild DEBO TENER IMPORTADO IonicModule EN EL components.module
    //otra forma de cerrar el slinding - 
    //@ViewChild('slidingItem') ionList:IonList; //ejemplo para identificador #slidingItem
    @ViewChild(IonList,{static: true}) ionListViewChild:IonList;
    //@ViewChild(IonList) ionList:IonList;
    // @ViewChildren(IonLabel) ionLabels: IonLabel[];
    viewChilds(){
        // console.log(this.ionList);
        // console.log(this.ionLabels);
        
    }
    


}
