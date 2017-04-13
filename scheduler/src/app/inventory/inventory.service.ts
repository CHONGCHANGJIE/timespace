import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class InventoryService {

  constructor(private http: Http) { }

  getPart(){
   return this.http.get('https://timespace-45075.firebaseio.com/inventory/part/.json').map(
    (res) => res.json()
   );

  }

}
