import {RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {MachinesComponent} from './machines/machines.component';
import {JobsComponent} from './jobs/jobs.component';
import {InventoryComponent} from './inventory/inventory.component';


export const AppRoutes = RouterModule.forRoot([
 { path: 'home', component: HomeComponent },
 { path: 'machines', component: MachinesComponent },
 { path: 'jobs', component: JobsComponent },
 { path: 'inventory', component: InventoryComponent },
 { path: '', component: HomeComponent },

]);
