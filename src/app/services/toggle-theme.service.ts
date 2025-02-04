import { effect, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ToggleThemeService {
  isDarkTheme = signal<boolean>(false);

  toggleTheme() {
    console.log('Toggling theme');
    this.isDarkTheme.update((value) => !value);
    this.updateTheme();
  }
  constructor() {
    this.updateTheme();
    effect(() => {
      console.log('Theme: ', this.isDarkTheme());
    });
  }

  private updateTheme() {
    const htmlSelector = document.documentElement;
    if (this.isDarkTheme()) {
      htmlSelector.classList.add('dark');
    } else {
      htmlSelector.classList.remove('dark');
    }
  }
}
