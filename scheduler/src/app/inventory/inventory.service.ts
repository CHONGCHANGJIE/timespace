import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {AngularFire, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2';
declare var firebase:any;


@Injectable()
export class InventoryService {
   parts: FirebaseListObservable<any[]>;
   part : FirebaseObjectObservable<any[]>;
  constructor(private af: AngularFire){

  }

  getParts(){
     this.parts =  this.af.database.list('/inventory/part') as FirebaseListObservable<Part[]>
     return this.parts;
  }


  addParts(part){
   console.log(part);
   this.af.database.list('/inventory/part').push(part);
     };

  }

interface Part{

   $key?:string;
   name?:string;
   quantity?:string;
}
