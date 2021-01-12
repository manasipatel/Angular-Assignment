import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderFooterComponent } from './parent/header-footer/header-footer.component';
import { HomeComponent } from './parent/home/home.component';
import { SearchComponent } from './parent/home/search/search.component';
import { FormComponent } from './parent/home/form/form.component';
import { ListViewComponent } from './parent/home/list-view/list-view.component';
import { ParentComponent } from './parent/parent.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HeaderFooterComponent,
    HomeComponent,
    SearchComponent,
    FormComponent,
    ListViewComponent,
    ParentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
