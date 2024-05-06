import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { DataService } from '../../core/services/data.service';
import { Officer } from '../../core/models/officer.model';
import { SearchService } from '../../core/services/search.service';
import { Company } from '../../core/models/company.model';

@Component({
  selector: 'app-directors',
  templateUrl: './directors.component.html',
  styleUrl: './directors.component.scss'
})
export class DirectorsComponent implements OnDestroy {
  private id: number;
  private sub: Subscription;

  public company: Company = {} as Company;
  public officers?: Officer[];

  constructor(
    public search: SearchService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private data: DataService,
  ) {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.company = this.search.getCompany(this.id);
    this.sub = this.data.getOfficers(this.id).subscribe(results => {
      this.officers = results.items;
    });
  }

  goBackToCompany() {
    this.router.navigateByUrl(`/details/${this.id}`);
  }

  goBackToSearch() {
    this.router.navigateByUrl('/');
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
