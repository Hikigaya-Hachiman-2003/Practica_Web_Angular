import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DbzComponent } from './pages/dbz/dbz.component';
import { CoctelesComponent } from './pages/cocteles/cocteles.component';
import { PokemonComponent } from './pages/pokemon/pokemon.component';
import { ErrorComponent } from './pages/error/error.component';
import { AuthGuard } from './guard/auth.guard';

export const routes: Routes = [
    {path:'', redirectTo:'home', pathMatch:'full'},
    {path:'home', component: HomeComponent},
    {path:'dbz', component: DbzComponent},
    {path:'cocteles', component: CoctelesComponent},
    {path:'pokemon', component: PokemonComponent},
    {path:'miapi', 
            loadChildren: () => import('./pages/miapi/miapi-routing.module').then(m => m.MiapiRoutingModule),
            canActivate: [AuthGuard]
        },

    {path:'**', component: ErrorComponent},
];
