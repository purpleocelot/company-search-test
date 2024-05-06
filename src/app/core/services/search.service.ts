import { Injectable, OnDestroy } from '@angular/core';
import { CompanyResults } from '../models/results.model';
import { BehaviorSubject, Subscription } from 'rxjs';
import { DataService } from './data.service';
import { Company } from '../models/company.model';

@Injectable({
  providedIn: 'root'
})
export class SearchService implements OnDestroy{

  private sub: Subscription = new Subscription();
  private results = new BehaviorSubject<CompanyResults>({} as CompanyResults);

  public results$ = this.results.asObservable();
  public lastQuery: string = ''

  constructor(private data: DataService) { }

  doSearch(searchTerm: string) {
    this.lastQuery = searchTerm;
    this.sub = this.data.getCompanies(searchTerm).subscribe(response => {
      this.results.next(response);
    });
  }

  getCompany(id: number): Company {
    return this.results.value.items.find(x => Number(x.number) === Number(id)) as Company;
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
