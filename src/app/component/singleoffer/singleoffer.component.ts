import { Component, OnInit } from '@angular/core';
import {FirebasestorageService} from "../../services/firebasestorage.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-singleoffer',
  templateUrl: './singleoffer.component.html',
  styleUrls: ['./singleoffer.component.css']
})
export class SingleofferComponent implements OnInit {
  offer:any;
  nume:string;
  constructor(private firebasestorage:FirebasestorageService, private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    console.log(this.route);

    this.route.params.subscribe(params => {
      this.nume = params['name']
    });

    this.firebasestorage.get_Offer().subscribe(data =>{
      this.offer = data.map( e => {
        return {
          Nume: e.payload.doc.data()['Nume'],
          URL: e.payload.doc.data()['URL'],
        }
      }).filter(data => data.Nume == this.nume);
    });
  }

}
