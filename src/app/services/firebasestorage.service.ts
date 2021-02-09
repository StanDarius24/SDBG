import { Injectable } from '@angular/core';
import {AngularFirestore} from "@angular/fire/firestore";

@Injectable({
  providedIn: 'root'
})
export class FirebasestorageService {

  constructor(public fireservices: AngularFirestore) { }
  create_NewOffer(Record)
  {
    return this.fireservices.collection('Offer').add(Record);
  }

  get_Offer()
  {
    return this.fireservices.collection('Offer').snapshotChanges();
  }
}
