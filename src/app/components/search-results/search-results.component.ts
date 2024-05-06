import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { SearchService } from '../../core/services/search.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrl: './search-results.component.scss'
})
export class SearchResultsComponent {

  constructor(public search: SearchService, private router: Router) {}

  goToCompany(companyNumber: number): void {
    this.router.navigateByUrl(`/details/${companyNumber}`);
  }
}
