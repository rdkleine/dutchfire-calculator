import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SimpleCalculatorComponent } from './pages/simple-calculator/simple-calculator.component';

const routes: Routes = [
  { path: 'simple', component: SimpleCalculatorComponent }
];


@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule {

}
