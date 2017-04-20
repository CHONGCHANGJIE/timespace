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
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';
import { InventoryService } from './inventory/inventory.service';
import { FilterPipe } from './filter.pipe'
import {FlashMessagesModule} from 'angular2-flash-messages';


export const firebaseConfig = {

 apiKey: "AIzaSyAPSzkVpwBj5qv6N_AYSUXLi1tTlNT27wI",
 authDomain: "timespace-45075.firebaseapp.com",
 databaseURL: "https://timespace-45075.firebaseio.com",
 projectId: "timespace-45075",
 storageBucket: "timespace-45075.appspot.com",
 messagingSenderId: "15827274381"
};

const firebaseAuthConfig= {
 provider: AuthProviders.Google,
 method: AuthMethods.Popup
}

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    MachinesComponent,
    JobsComponent,
    InventoryComponent,
    InventoryFormComponent,
    FilterPipe,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot([]),
    AppRoutes,
    AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig),
    FlashMessagesModule
  ],
  providers: [InventoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
