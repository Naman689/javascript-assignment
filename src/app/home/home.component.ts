import { Component, OnInit } from '@angular/core';
import { ucs2 } from 'punycode';
import { from } from 'rxjs';
import { UserserviceService }  from '../userservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  data:any[]=[]
 

  constructor(private user : UserserviceService) {}

  ngOnInit(){
    this.user.getData().subscribe(data=>{
      console.log(data)
      this.data=data.data
   })
  }


  
}
