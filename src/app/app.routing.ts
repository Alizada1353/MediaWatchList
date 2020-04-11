import { Routes, RouterModule } from '@angular/router';
import { MediaItemListComponent } from './media-item-list/media-item-list.component';


const routes: Routes = [
  {
    path: 'add', 
    loadChildren: () => import('./media-item-form/new-media-item.module').then(m => m.newMediaItemModule)
  },
  {path: ':medium', component: MediaItemListComponent},
  {path: '', pathMatch: 'full', redirectTo: 'all'}
];


export const routing = RouterModule.forRoot(routes);
