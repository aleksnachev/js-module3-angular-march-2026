import { Component } from '@angular/core';
import { ThemesList } from './themes-list/themes-list.js';
import { RecentPosts } from './recent-posts/recent-posts.js';

@Component({
  selector: 'app-themes',
  imports: [ThemesList, RecentPosts],
  templateUrl: './themes.html',
  styleUrl: './themes.css',
})
export class Themes {}
