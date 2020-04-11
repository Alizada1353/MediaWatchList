import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpXhrBackend } from "@angular/common/http";
import { AppComponent } from './app.component';
import { MediaItemComponent } from './media-item/media-item.component';
import { MediaItemListComponent } from './media-item-list/media-item-list.component';
import { FavoriteDirective } from './directives/favorite.directive';
import { CategoryListPipe } from './pipes/category-list.pipe';
import { lookupListToken, lookupList } from './providers';
import { MockXHRBackend } from './backend/mock-xhr-backend';
import { routing } from "./app.routing";

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    routing
  ],
  declarations: [
    AppComponent,
    MediaItemComponent,
    MediaItemListComponent,
    FavoriteDirective,
    CategoryListPipe
  ],
  providers: [
    {provide: lookupListToken, useValue: lookupList},
    {provide: HttpXhrBackend, useClass: MockXHRBackend}
  ],

  bootstrap: [
    AppComponent
  ]
})

export class AppModule { }