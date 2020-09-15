import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Lista } from 'src/app/models/lista.model';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

    constructor(
        public todoService:TodoService,
        private router:Router,
        public alertController: AlertController
    ) {

    }
  
    // agregarLista(){
    //     this.router.navigateByUrl('tabs/tab1/agregar');
    // }

    async agregarLista() {
        const alert = await this.alertController.create({
            // cssClass: 'my-custom-class',
            header: 'Nueva Lista',
            // subHeader: 'Subtitle',
            // message: 'This is an alert message.',
            inputs: [
                {
                    name: 'titulo',
                    type: 'text',
                    placeholder: 'nombre de la lista'
                }
            ],
            buttons: [
                {
                    text: 'Cancelar',
                    role:'cancel',
                    handler: ()=>{
                        console.log('cancelado');
                    }
                },
                {
                    text: 'Crear',
                    handler: (data)=>{
                        console.log('crear',data);
                        if(data.titulo.length===0){
                            return;
                        }
                        
                        let idLista = this.todoService.crearLista(data.titulo);
                        this.router.navigateByUrl(`tabs/tab1/agregar/${idLista}`);
                    }
                }
            ]
          });

        alert.present();
    }


    verLista(lista:Lista){
        // console.log(lista)
        this.router.navigateByUrl(`tabs/tab1/agregar/${lista.id}`);
    }

}
