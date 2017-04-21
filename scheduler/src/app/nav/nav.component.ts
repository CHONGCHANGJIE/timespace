import { Component, OnInit } from '@angular/core';
import {AngularFire} from 'angularfire2';
import {Router} from '@angular/router';
import {FlashMessagesService} from 'angular2-flash-messages';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],

})
export class NavComponent implements OnInit {

  constructor(public af: AngularFire, private router:Router, public flashMessage: FlashMessagesService ) { }

  ngOnInit() {
  }

   //collapse content

   login(){
    this.af.auth.login().then(authState =>{ console.log("AFTER LOGIN",authState)});
    this.router.navigate(['']);
   }

   logout(){
    this.af.auth.logout();
    this.router.navigate(['']);
    this.flashMessage.show('You are logged out',{cssClass:'alert-success',timeout : 4000})
   }
}
