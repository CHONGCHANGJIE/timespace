import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
declare var firebase:any;



@Injectable()
export class InventoryService {
part:any;
  constructor(private http: Http) { }

  getPart(){
   return this.http.get('https://timespace-45075.firebaseio.com/inventory/part/.json').map(
    (res) => res.json()
   );

  }

  fbPostData(part){
   firebase.database().ref('/inventory/part').push(part);
  }

}
