import { Component, OnInit } from '@angular/core';
import { InventoryService} from './inventory.service';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2';
import { FilterPipe} from '../filter.pipe';
import { Router} from '@angular/router';


// declare var firebase:any;


@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css'],


})
export class InventoryComponent implements OnInit {
 part: any;
 parts :any ;


 isLoading; //add loader icon


  constructor(private inventoryService: InventoryService,
              private af: AngularFire,
              private router: Router,

){
 }
  ngOnInit() {
            this.loadParts();
                    }

  onDeleteClick(part){
 if(confirm("Are you sure you want to delete "+ part.name + "?")){
   this.inventoryService.deleteParts(part);
 }}

  onSelect(part){
   this.router.navigate(['/inventory',part.name]);
  }
private loadParts(){
               this.isLoading = true;
               this.inventoryService.getParts().subscribe(
                parts => { this.parts = parts;
                           this.isLoading = false;
                        },


                );

}
}
