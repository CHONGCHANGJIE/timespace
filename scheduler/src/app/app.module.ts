import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { AppRoutes } from './app.routes';
import { RouterModule} from '@angular/router';
import { MachinesComponent } from './machines/machines.component';
import { JobsComponent } from './jobs/jobs.component';
import { InventoryComponent } from './inventory/inventory.component';
import 'rxjs/add/operator/map';
import { InventoryFormComponent } from './inventory/inventory-form/inventory-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    MachinesComponent,
    JobsComponent,
    InventoryComponent,
    InventoryFormComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot([]),
    AppRoutes

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
