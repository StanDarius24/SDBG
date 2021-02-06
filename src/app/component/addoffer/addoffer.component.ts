import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addoffer',
  templateUrl: './addoffer.component.html',
  styleUrls: ['./addoffer.component.css']
})
export class AddofferComponent implements OnInit {

  constructor() { }
  path:string;
  url:string;
  ngOnInit(): void {
  }
  upload(e) :void {
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
}
