import { Component, computed, Input, input} from '@angular/core';


@Component({
  selector: 'app-user',
  templateUrl: './user.html',
  styleUrl: './user.css',
  standalone: true,
})
export class User {
  // @Input({required:true}) avatar!: string
  // @Input({required:true}) name!: string
  avatar = input.required<string>()
  name = input.required<string>()

  // get imagePath(){
  //   return 'assets/users/' + this.avatar
  // }
  imagePath = computed(() => {
    return 'assets/users/' + this.avatar()
  })
  
  onSelectUser() {

  }
}
 