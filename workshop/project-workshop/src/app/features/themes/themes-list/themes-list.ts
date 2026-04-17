import { Component, OnInit } from '@angular/core';
import { Theme } from '../../../shared/interfaces/theme.js';
import { Api } from '../../../core/services/api.service.js';
import { ThemeItem } from '../../../shared/components/theme-item/theme-item.js';

@Component({
  selector: 'app-themes-list',
  imports: [ThemeItem],
  templateUrl: './themes-list.html',
  styleUrl: './themes-list.css',
})
export class ThemesList implements OnInit{
  themes: Theme[] = []

  constructor(private apiService: Api){}

  ngOnInit():void{
    this.apiService.getThemes().subscribe((themes) => {
      this.themes = themes.sort((a,b) => b.subscribers.length - a.subscribers.length)
      console.log(themes);
      
    })
  }
}
