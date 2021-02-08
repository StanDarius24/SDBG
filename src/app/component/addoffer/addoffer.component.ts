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
  path:string;
  Message:string;
  downloadURL: Observable<string>;
  url:string;
  fb:string ="E gol";
  constructor(public firebaseservice:FirebasestorageService,public route:ActivatedRoute, public firebasestorage:AngularFireStorage) { }

  ngOnInit(): void {
  }
  upload(e) :void {
    console.log(e);
    if(e.target.files)
    {
      this.path = e.target.files[0];
      var reader = new FileReader();
      reader.readAsDataURL(e.target.file[0]);
      reader.onload=(event2:any)=>{
        this.url=event2.target.result
      };
    }
  }
  create() :void
  {
    const fpath = "/file" + this.Nume ;

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

    Record['Nume'] = this.Nume;
    Record['URL'] = this.fb;
    console.log(Record);
    this.Message="Produs adaugat";
    this.firebaseservice.create_NewOffer(Record).then(
      res=>{
        this.Nume="";
        this.fb="";
        console.log(res);
        this.Message="Data Saved!";
      }
    ).catch(error =>{
      console.log(error);
    });
  }
}
