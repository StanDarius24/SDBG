import { Component, OnInit } from '@angular/core';
import {FirebasestorageService} from "../../services/firebasestorage.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-oferte',
  templateUrl: './oferte.component.html',
  styleUrls: ['./oferte.component.css']
})
export class OferteComponent implements OnInit {
  product:any;
  constructor(private firebaseservices:FirebasestorageService, private router:Router) { }

  ngOnInit(): void {
    this.firebaseservices.get_Offer().subscribe(data =>{
      this.product=data.map( e=>{
        return {
          Nume: e.payload.doc.data()['Nume'],
          URL: e.payload.doc.data()['URL'],
        }
      });
      console.log(this.product);
    })
  }

  gotooffer(text:string)
  {
    this.router.navigate(['singleoffer',text]).then();
  }

}
