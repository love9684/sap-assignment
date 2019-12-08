import { Component } from '@angular/core';
import { CommonService } from './service/common.service';
import { CharacterResponse, Character } from './model/common.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Rick and Morty';
  characters: Character[] = [];
  filterValues = {};
  searchValue = '';
  sortById = '';
  filters = [{
    category: 'Species',
    values: [{
      name: 'Human',
      value: 'Human'
    }, {
      name: 'Mytholog',
      value: 'Mytholog'
    }, {
      name: 'Other Species ...',
      value: 'other'
    }]
  }, {
    category: 'Gender',
    values: [{
      name: 'Male',
      value: 'Male'
    }, {
      name: 'Female',
      value: 'Female'
    }]
  }, {
    category: 'Origin',
    values: [{
      name: 'Unknown',
      value: 'unknown'
    }, {
      name: 'Post-Apocalyptic Earth',
      value: 'Post-Apocalyptic Earth'
    }, {
      name: 'Nuptia 4',
      value: 'Nuptia 4'
    }, {
      name: 'Other Origins ...',
      value: 'other'
    }]
  }];

  constructor(private commonService: CommonService) {
    this.getCharacters();
  }

  getCharacters() {
    this.commonService.getCharacters().subscribe((data: CharacterResponse) => {
      this.characters = data.results;
    });
  }

  selectFilter(category: string, value: string) {
    this.filterValues[category] = value;
  }

  removeFilter(item) {
    delete this.filterValues[item.key];
  }

}
