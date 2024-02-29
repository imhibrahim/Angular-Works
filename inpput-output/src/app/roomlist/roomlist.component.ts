import { Component, Input } from '@angular/core';
import { Room } from '../../models/room';

@Component({
  selector: 'app-roomlist',
  templateUrl: './roomlist.component.html',
  styleUrl: './roomlist.component.css'
})
export class RoomlistComponent {
  selectRoom:Room={};

  @Input() AllRooms:Room[]=[]

selectroom(event:any){
  
  this.AllRooms.filter((item)=>{
if(item.roomnumber == event){
  this.selectRoom=item;

}
  });

}
}
