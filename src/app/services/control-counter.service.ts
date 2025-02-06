import { effect, Injectable, signal } from '@angular/core';

let characters: {
  character: string;
  totalCount: number;
  percentage: number;
}[] = [];
let letters: { [string: string]: number } = {};
@Injectable({
  providedIn: 'root',
})
export class ControlCounterService {
  excludeSpaces = signal<boolean>(false);
  characterLimit = signal<boolean>(false);
  totalCharacters = signal(0);
  totalWords = signal(0);
  textContent = signal('');
  letterDensity = signal<
    {
      character: string;
      totalCount: number;
      percentage: number;
    }[]
  >([]);

  toggleExcludeSpaces() {
    this.excludeSpaces.update((prev) => !prev);
  }
  toggleCharacterLimit() {
    this.characterLimit.update((prev) => !prev);
  }

  constructor() {
    effect(() => {
      this.updateLetterDensity(this.textContent());
      if (this.textContent().length > 0) {
        this.updateTotalCharacters();
        this.totalWords.set(this.textContent().trim().split(' ').length);
      } else {
        this.totalCharacters.set(0);
        this.totalWords.set(0);
      }
    });
  }

  updateTotalCharacters() {
    if (this.excludeSpaces()) {
      this.totalCharacters.set(
        this.removeWhiteSpace(this.textContent()).length
      );
      return;
    }
    this.totalCharacters.set(this.textContent().length);
  }
  removeWhiteSpace(word: string) {
    let newWord: string = '';
    for (const character of word.trim()) {
      if (character == ' ') {
        continue;
      }
      newWord += character;
    }
    return newWord;
  }

  updateLetterDensity(word: string) {
    letters = {};
    characters = [];
    for (const character of word.trim()) {
      if (character == ' ') {
        continue;
      }

      letters[character] = letters[character] > 0 ? ++letters[character] : 1;
    }
    // sort the object
    const sortObject = Object.entries(letters).sort((a, b) => b[1] - a[1]); //sort the object using its values in descending order

    sortObject.forEach((value) => {
      characters.push({
        character: value[0],
        totalCount: value[1],
        percentage: this.roundOff(value[1]),
      });
    });
    this.letterDensity.set(characters);
  }

  roundOff(value: number) {
    return (
      Math.round(
        ((value * 100) / this.removeWhiteSpace(this.textContent()).length) * 100
      ) / 100
    );
  }
}
