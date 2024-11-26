import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListMiapiComponent } from './pages/list-miapi/list-miapi.component';
import { GfncCrudComponent } from './pages/list-miapi/gfnc-crud/gfnc-crud.component';
import { GfncModificarComponent } from './pages/list-miapi/gfnc-modificar/gfnc-modificar.component';



const routes: Routes = [
  {path:'', redirectTo:'list', pathMatch:'full'},
  {path:'list', component: ListMiapiComponent, pathMatch: 'full'},
  {path:'crud', component: GfncCrudComponent},
  {path:'modificar', component: GfncModificarComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MiapiRoutingModule { }
