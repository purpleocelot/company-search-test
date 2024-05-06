import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

import { SearchService } from '../../core/services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {

  public searchFormControl = new FormControl('', [Validators.required, Validators.pattern(/^\S+/)]);

  constructor(private search: SearchService) {
    this.searchFormControl.setValue(this.search.lastQuery);
  }

  doSearch() {
    const searchTerm = this.searchFormControl.value ?? '';
    this.search.doSearch(searchTerm);
  }
}
