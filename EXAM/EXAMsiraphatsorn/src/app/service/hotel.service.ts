import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';
import { Hotel } from '../model/hotel';
@Injectable({
  providedIn: 'root'
})
export class HotelService {

Url='https://localhost:44321/api/hotels';

  constructor(private http:HttpClient) { }

  getHotel(){
    return this.http.get<Hotel[]>(this.Url);
  }j
}