// Reactiveformcomponent

import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {InventoryService} from'../inventory.service';


@Component({
  selector: 'app-inventory-form',
  templateUrl: './inventory-form.component.html',
  styleUrls: ['./inventory-form.component.css'],
  providers: [InventoryService],

})
export class InventoryFormComponent implements OnInit {

  form: FormGroup


  constructor(public fb: FormBuilder, private inventoryService: InventoryService) {
   this.form = this.fb.group({
    name: ['',Validators.required],
    quantity:['', Validators.required],
   });
  }
  onSubmit(){

    this.inventoryService.fbPostData(this.form.value);

  }
  ngOnInit() {
  }



 }
