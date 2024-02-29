import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Room } from '../../../models/room';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrl: './room.component.css'
})
export class RoomComponent {

  @Input() room:Room={}
@Output() GetSelectRoomId = new EventEmitter<any>();

  SelectRoom(roomNo:any ){
   this.GetSelectRoomId.emit(roomNo);
  }

}
