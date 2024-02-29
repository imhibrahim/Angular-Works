import { Component, Input } from '@angular/core';
import { Room } from '../../models/room';

@Component({
  selector: 'app-roomlist',
  templateUrl: './roomlist.component.html',
  styleUrl: './roomlist.component.css'
})
export class RoomlistComponent {

  @Input() AllRooms:Room[]=[]

  onRoomSelect()
{
  alert(); 
}
}
