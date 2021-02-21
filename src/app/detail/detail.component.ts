import { Component, OnInit } from '@angular/core';
import { UserserviceService }  from '../userservice.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  data:any[]=[]
 

  constructor(private user : UserserviceService) {}

  ngOnInit(){
    this.user.getData().subscribe(data=>{
      console.log(data)
      this.data=data.data
   })
  }
  

}
