import { Component, OnInit } from '@angular/core';
import { InventoryService} from './inventory.service';
import {AngularFire, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2';
import {FilterPipe} from '../filter.pipe';

// declare var firebase:any;


@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css'],


})
export class InventoryComponent implements OnInit {
 part: any;
 parts :any ;
  // isLoading = true; //add loader icon

  constructor(private inventoryService: InventoryService,
              private af: AngularFire,
){
 }
  ngOnInit() {

    this.inventoryService.getParts().subscribe(parts =>{
         this.parts=parts;})
  }

  onDeleteClick(part){
 if(confirm("Are you sure you want to delete "+ part.name + "?")){
   this.inventoryService.deleteParts(part);
 }}

}
