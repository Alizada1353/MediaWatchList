import { Routes, RouterModule } from '@angular/router';
import { MediaItemListComponent } from './media-item-list/media-item-list.component';


const routes: Routes = [
  {path: ':medium', component: MediaItemListComponent},
  {path: '', pathMatch: 'full', redirectTo: 'all'}
];


export const routing = RouterModule.forRoot(routes);
