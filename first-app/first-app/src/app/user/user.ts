import { Component, EventEmitter, Input, Output} from '@angular/core';
import { required } from '@angular/forms/signals';

type User1 = {
    id:string;
    name:string;
    avatar:string;
  } 

@Component({
  selector: 'app-user',
  templateUrl: './user.html',
  styleUrl: './user.css',
  standalone: true,
})
export class User {
  @Input({required:true}) user!: User1
  @Output() select = new EventEmitter()
  // avatar = input.required<string>()
  // name = input.required<string>()

  get imagePath(){
    return 'assets/users/' + this.user.avatar
  }
  // imagePath = computed(() => {
  //   return 'assets/users/' + this.avatar()
  // })

  onSelectUser() {
    this.select.emit(this.user.id)
  }
}
 