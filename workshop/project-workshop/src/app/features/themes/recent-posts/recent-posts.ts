import { Component, OnInit } from '@angular/core';
import { Post } from '../../../shared/interfaces/post.js';
import { Api } from '../../../core/services/api.service.js';
import { PostItem } from '../../../shared/components/post-item/post-item.js';

@Component({
  selector: 'app-recent-posts',
  imports: [PostItem],
  templateUrl: './recent-posts.html',
  styleUrl: './recent-posts.css',
})
export class RecentPosts implements OnInit {
  posts: Post[] = [];

  constructor(private apiService: Api) {}

  ngOnInit(): void {
    this.apiService.getLatestPosts().subscribe((posts) => {
      this.posts = posts
    });
  }
}
