import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from '@angular/forms';
import { MediaItemFormComponent } from "./media-item-form.component";
import { NewItemrouting } from "./new-media-item.routng";

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        NewItemrouting
    ],
    declarations: [
        MediaItemFormComponent,
    ],
})

export class newMediaItemModule { }