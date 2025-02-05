import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ControlCounterService {
  excludeSpaces = signal<boolean>(false);
  characterLimit = signal<boolean>(true);

  toggleExcludeSpaces() {
    this.excludeSpaces.update((prev) => !prev);
  }
  toggleCharacterLimit() {
    this.characterLimit.update((prev) => !prev);
  }

  constructor() {}
}
