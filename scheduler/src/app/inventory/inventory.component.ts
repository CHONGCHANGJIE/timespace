import { Component, OnInit } from '@angular/core';
import { InventoryService} from './inventory.service';

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
     null,                        // add loader icon
     ()=>{this.isLoading =false;} // add loader icon
   );
  }

}
