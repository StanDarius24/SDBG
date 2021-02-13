import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreDocument} from "@angular/fire/firestore";

@Injectable({
  providedIn: 'root'
})
export class FirebasestorageService {
  itemDoc: AngularFirestoreDocument;
  constructor(public fireservices: AngularFirestore) { }
  create_NewOffer(Record)
  {
    return this.fireservices.collection('Offer').add(Record);
  }

  get_Offer()
  {
    return this.fireservices.collection('Offer').snapshotChanges();
  }

  delete_Offer(poz:any)
  {
    this.itemDoc = this.fireservices.doc(`Offer/${poz}`);
    console.log(this.itemDoc);
    this.itemDoc.delete();
  }

}
