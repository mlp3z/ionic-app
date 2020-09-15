import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';

import { Tab2PageRoutingModule } from './tab2-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';
// import { ListasComponent } from 'src/app/components/listas/listas.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    Tab2PageRoutingModule,
    ComponentsModule //de esta forma podemos importa un modulo de componentes en los 2 tabs
  ],
    declarations: [
        Tab2Page
        // ,ListasComponent //importar el mismo componente en los 2 tabs genera un error
    ]
})
export class Tab2PageModule {}
