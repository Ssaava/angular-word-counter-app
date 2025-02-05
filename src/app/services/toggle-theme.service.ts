import { effect, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ToggleThemeService {
  private systemTheme = window.matchMedia('(prefers-color-scheme: dark)');
  isDarkTheme = signal<boolean>(false);

  constructor() {
    this.initializeTheme();

    effect(() => {
      this.updateTheme();
      this.saveThemeToLocalStorage();
    });
  }

  toggleTheme() {
    this.isDarkTheme.update((value) => !value);
  }
  toggleSystemTheme() {
    this.isDarkTheme.set(this.systemTheme.matches);
  }
  private initializeTheme() {
    const currentTheme = localStorage.getItem('theme');
    switch (currentTheme) {
      case 'dark':
        this.isDarkTheme.set(true);
        break;
      case 'light':
        this.isDarkTheme.set(false);
        break;
      default:
        this.isDarkTheme.set(this.systemTheme.matches);
        break;
    }
  }
  private updateTheme() {
    const htmlSelector = document.documentElement;
    htmlSelector.classList.toggle('dark', this.isDarkTheme());
    htmlSelector.classList.toggle('light', !this.isDarkTheme());
  }

  private saveThemeToLocalStorage() {
    localStorage.setItem('theme', this.isDarkTheme() ? 'dark' : 'light');
  }
}
