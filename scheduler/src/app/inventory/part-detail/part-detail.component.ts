import { Component, OnInit } from '@angular/core';
import {InventoryService} from '../inventory.service';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-part-detail',
  templateUrl: './part-detail.component.html',
  styleUrls: ['./part-detail.component.css']
})
export class PartDetailComponent implements OnInit {
  id:any;
  part: any;
  required= false;
  showprocess= false;
  form: FormGroup;
  processes: FormArray;


constructor(
    private inventoryService: InventoryService,
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder,
  ) {
   this.form = this.fb.group({
    name: ['',Validators.required],
    quantity:['', Validators.required],
    processes: this.buildArray()
     });
  }


  ngOnInit() {
   this.id= this.route.snapshot.params['id'];
   this.inventoryService.getPartDetails(this.id).subscribe(part => {
   this.part = part;
   console.log(part);
   });

  }

  onchange(){
   this.required = !this.required ;

  }

  showprocesses(){
   this.showprocess = !this.showprocess;
  }

  add(){
   this.processes.push(this.buildGroup());
  }

  buildArray(): FormArray{
   this.processes = this.fb.array([
    this.buildGroup()
   ]);
   return this.processes;
  }

  buildGroup(){
   return this.fb.group({
    department:'',
    machine:'',
    cycletime:'',
   });
  }

}
