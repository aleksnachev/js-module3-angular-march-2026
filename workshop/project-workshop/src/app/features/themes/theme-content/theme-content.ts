import { Component, inject, OnInit } from '@angular/core';
import { Api } from '../../../core/services/api.service.js';
import { Theme } from '../../../shared/interfaces/theme.js';
import { Post } from '../../../shared/interfaces/post.js';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-theme-content',
  imports: [],
  templateUrl: './theme-content.html',
  styleUrl: './theme-content.css',
})
export class ThemeContent implements OnInit {
  private apiService = inject(Api);
  private route = inject(ActivatedRoute);
  theme: Theme | null = null;
  posts: Post[] = [];
  commonText = '';
  themeId = '';

  ngOnInit(): void {
    this.themeId = this.route.snapshot.params['themeId'];
    this.loadThemeData();
  }

  loadThemeData(): void {
    this.apiService.getThemes().subscribe((themes) => {
      this.theme = themes.find((t) => t._id === this.themeId) || null;
    });

    this.apiService.getLatestPosts().subscribe((posts) => {
      this.posts = posts.filter((p: any) => p.themeId?._id === this.themeId);
    });
  }
}
