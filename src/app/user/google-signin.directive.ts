import { Directive, HostListener } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import * as firebase from 'firebase/app'

@Directive({
  selector: '[appGoogleSignin]'
})
export class GoogleSigninDirective {

  constructor(private afauth : AngularFireAuth) {
   }

   @HostListener('click')
   onClick(){
     this.afauth.signInWithPopup(new firebase.default.auth.GoogleAuthProvider());
   }

}
