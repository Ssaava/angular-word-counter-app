import { Component, effect, inject, signal } from '@angular/core';
import { ToggleThemeService } from '../../services/toggle-theme.service';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  darkThemeService: ToggleThemeService = inject(ToggleThemeService);
  toggleDarkMode() {
    this.darkThemeService.toggleTheme();
  }
}
