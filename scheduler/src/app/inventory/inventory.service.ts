import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {AngularFire, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2';



@Injectable()
export class InventoryService {
   parts: FirebaseListObservable<any[]>;
   part: FirebaseObjectObservable<any[]>;


  constructor(private af: AngularFire){

  }

  getParts(){
     this.parts =  this.af.database.list('/inventory/part') as FirebaseListObservable<Part[]>
     return this.parts;
  }


  addParts(part){
  var newPostKey= part.name;
  var updates=  {};
  updates['/inventory/part/'+ newPostKey]=part

  this.af.database.object('').update(updates).then(x=>console.log("SUCCESS")).catch(error=> console.log("ERROR",error));;
}


  deleteParts(part){

   var key=part.$key;
   this.af.database.list('/inventory/part').remove(key).then(x=>console.log("SUCCESS")).catch(error=> console.log("ERROR",error));

  }

  getPartDetails(id){
   this.part = this.af.database.object('/inventory/part/'+id) as FirebaseObjectObservable<Part>
   return this.part;
  }
}

interface Part{

   $key?:string;
   quantity?:string;
}
//
