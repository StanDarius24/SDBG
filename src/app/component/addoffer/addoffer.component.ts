import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {AngularFireStorage} from "@angular/fire/storage";
import {FirebasestorageService} from "../../services/firebasestorage.service";
import {Observable} from "rxjs";
import {finalize} from "rxjs/operators";

@Component({
  selector: 'app-addoffer',
  templateUrl: './addoffer.component.html',
  styleUrls: ['./addoffer.component.css']
})
export class AddofferComponent implements OnInit {
  Nume:string;
  Descriere:string;
  path:string;
  Message:string;
  downloadURL: Observable<string>;
  url:string;
  fb:string ="E gol";
  numberR:number;
  constructor(public firebaseservice:FirebasestorageService,public route:ActivatedRoute, public firebasestorage:AngularFireStorage) { }

  ngOnInit(): void {
  }
  upload(e) :void {


    if(e.target.files[0])
    {
      this.path = e.target.files[0];
      var reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);

      reader.onload=(event2:any)=>{
        this.url=event2.target.result
      };
    }
  }





  create() :void
  {

    console.log(this.Nume);
    const fpath = "/file" + Math.floor(Math.random() * Math.floor(1000)); ;

    const fileref = this.firebasestorage.ref(fpath);

    const task = this.firebasestorage.upload(fpath , this.path );

    task.snapshotChanges()
      .pipe(
        finalize(() =>{
          this.downloadURL = fileref.getDownloadURL();
          this.downloadURL.subscribe(url => {
            if(url)
            {
              this.fb = url;
              this.adaugarea();
            }
            console.log(this.fb);
          });
        })
      )
      .subscribe(url =>{
        if(url) {
          console.log(url);

        }
      });

  }

  adaugarea()
  {
    let Record={};
    var nst="                            ";
    Record['Nume'] = this.Nume+nst;
    Record['URL'] = this.fb;
    Record['Descriere'] = this.Descriere;
    console.log(Record);
    this.Message="Produs adaugat";
    this.firebaseservice.create_NewOffer(Record).then(
      res=>{
        this.Nume="";
        this.fb="";
        this.Descriere="";
        console.log(res);
        this.Message="Data Saved!";
      }
    ).catch(error =>{
      console.log(error);
    });
  }
}
