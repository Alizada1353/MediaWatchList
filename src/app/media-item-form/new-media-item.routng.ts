import { Routes, RouterModule } from '@angular/router';
import { MediaItemFormComponent } from '../media-item-form/media-item-form.component';


const newMediaItem: Routes = [{ path: '', component: MediaItemFormComponent }];


export const NewItemrouting = RouterModule.forChild(newMediaItem);


