import { Component, OnInit } from '@angular/core';
import { Room, roomlist } from '../models/room';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
fatchRoomData:Room[]=[]

 ngOnInit(): void {
  this.fatchRoomData= roomlist;

 }

}
