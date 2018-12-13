import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { HotelService }  from '../service/hotel.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  hotel=[];
  errMsg="";

  constructor( private htSV:HotelService,
                private route:Router) { }

  ngOnInit() {
    this.fechhotel();
  }

fechhotel(){
  this.htSV.getHotel()
  .subscribe (data =>{ this.hotel = data ;});
    
  }

  gotoCreateHotel(){
    this.route.navigate(['/','create-hotel']);
  }

}




