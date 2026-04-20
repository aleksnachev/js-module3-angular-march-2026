import { Component, Input } from '@angular/core';
import { Theme } from '../../interfaces/theme.js';
import { RouterLink } from '@angular/router';
import { TitleSlicePipe } from '../../pipes/title-slice.pipe.js';

@Component({
  selector: 'app-theme-item',
  imports: [RouterLink, TitleSlicePipe],
  templateUrl: './theme-item.html',
  styleUrl: './theme-item.css',
})
export class ThemeItem {
  @Input({required:true}) theme!: Theme
}
