import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { rejects } from 'assert';
import { Resolver } from 'dns';
import { promise } from 'protractor';
import { AngularFirestore } from "@angular/fire/firestore";
import { Router } from "@angular/router";


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private AFauth : AngularFireAuth,
    private router : Router,
    private db : AngularFirestore) { }

  login(email:string, password:string){

    return new Promise((resolve, rejected) =>{
      this.AFauth.signInWithEmailAndPassword(email, password).then(user => {
        resolve(user);
      }).catch(err => rejected(err));
    });
  }

  logout(){
    this.AFauth.signOut().then(() =>{
      this.router.navigate(['/login']);
    })
  }

  register(email : string, password : string, name : string, telfon : string, contract : string ){
    return new Promise ((resolve, reject) => {
      this.AFauth.createUserWithEmailAndPassword(email, password).then( res =>{
        console.log(res.user.uid);
        const uid =res.user.uid; 
        this.db.collection('users').doc(uid).set({
          name : name,
          telfon : telfon,
          contract : contract,
          uid : uid
        })
       resolve(res)
      }).catch( err => reject(err))
    })
    
  }
}
