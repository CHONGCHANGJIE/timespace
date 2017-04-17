// Reactiveformcomponent

import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {InventoryService} from'../inventory.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-inventory-form',
  templateUrl: './inventory-form.component.html',
  styleUrls: ['./inventory-form.component.css'],
  providers: [InventoryService],

})
export class InventoryFormComponent implements OnInit {
  form: FormGroup

  constructor(public fb: FormBuilder, private inventoryService: InventoryService, private router:Router) {
   this.form = this.fb.group({
    name: ['',Validators.required],
    quantity:['', Validators.required],
   });
  }
  onSubmit(){

   this.inventoryService.addParts(this.form.value)
   this.router.navigate(['inventory']);
  }
  ngOnInit() {
  }



 }
