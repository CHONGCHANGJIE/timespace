import { Component, OnInit } from '@angular/core';
import { InventoryService} from './inventory.service';
// declare var firebase:any;

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css'],
  providers: [InventoryService]
})
export class InventoryComponent implements OnInit {

  parts = [];

  isLoading = true; //add loader icon

  constructor(private inventoryService: InventoryService) { }

  ngOnInit() {

   this.inventoryService.getPart().subscribe(
     (part) => this.parts = part,
      null,
      () => { this.isLoading = false; }
   );



   // this.fbGetData();



  }

  // fbGetData(){
  //  firebase.database().ref('/inventory/part').on(
  //   'child_added',
  //   (snapshot) =>{this.parts.push(snapshot.val())},
  //   () => { this.isLoading = false; }
  //  )
  //
  //
  // }

}
