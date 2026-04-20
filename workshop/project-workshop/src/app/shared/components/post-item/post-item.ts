import { Component, Input } from '@angular/core';
import { Post } from '../../interfaces/post.js';
import { TitleSlicePipe } from '../../pipes/title-slice.pipe.js';
import { TimeAgoPostedPipe } from '../../pipes/time-ago-posted.pipe.js';

@Component({
  selector: 'app-post-item',
  imports: [TitleSlicePipe, TimeAgoPostedPipe],
  templateUrl: './post-item.html',
  styleUrl: './post-item.css',
})
export class PostItem {
  @Input({required:true}) post!: Post

}
