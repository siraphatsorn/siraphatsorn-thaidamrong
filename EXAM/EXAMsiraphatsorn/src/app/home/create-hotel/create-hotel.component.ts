import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validator, Validators}from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {HotelService} from '../../service/hotel.service';

@Component({
  selector: 'app-create-hotel',
  templateUrl: './create-hotel.component.html',
  styleUrls: ['./create-hotel.component.css']
})
export class CreateHotelComponent implements OnInit {
  

  constructor() { }

  ngOnInit() {
  }

}
