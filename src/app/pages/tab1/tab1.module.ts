import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';

import { Tab1PageRoutingModule } from './tab1-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';
// import { ListasComponent } from 'src/app/components/listas/listas.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    Tab1PageRoutingModule,
    ComponentsModule //de esta forma podemos importa un modulo de componentes en los 2 tabs
  ],
    declarations: [
      Tab1Page, 
    //   ListasComponent //importar el mismo componente en los 2 tabs genera un error
    ]
})
export class Tab1PageModule {}
