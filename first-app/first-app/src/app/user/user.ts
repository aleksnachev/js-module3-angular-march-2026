import { Component, EventEmitter, Input, Output} from '@angular/core';
import { required } from '@angular/forms/signals';


@Component({
  selector: 'app-user',
  templateUrl: './user.html',
  styleUrl: './user.css',
  standalone: true,
})
export class User {
  @Input({required:true}) id!:string
  @Input({required:true}) avatar!: string
  @Input({required:true}) name!: string
  @Output() select = new EventEmitter()
  // avatar = input.required<string>()
  // name = input.required<string>()

  get imagePath(){
    return 'assets/users/' + this.avatar
  }
  // imagePath = computed(() => {
  //   return 'assets/users/' + this.avatar()
  // })

  onSelectUser() {
    this.select.emit(this.id)
  }
}
 