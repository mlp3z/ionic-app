import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListasComponent } from './listas/listas.component';
import { PipesModule } from '../pipes/pipes.module';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [
      ListasComponent
  ],
  exports:[
    ListasComponent
  ],
  imports: [
    CommonModule,
    IonicModule, //PARA QUE FUNCIONE EL ViewChild DEBO TENER IMPORTADO IonicModule EN EL components.module
    PipesModule
  ]
})
export class ComponentsModule { }
