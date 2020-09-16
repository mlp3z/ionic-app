import { NgModule } from '@angular/core';
import { FiltroPipe } from './filtro.pipe';
import { CountItemsPipe } from './count-items.pipe';
// import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [FiltroPipe, CountItemsPipe],
  exports:[
      FiltroPipe,
      CountItemsPipe
    ],
  imports: [
    // CommonModule //no vamos a usar ngIf,ngFor asique no lo importamos
  ]
})
export class PipesModule { }
