import { Component } from '@angular/core';
import { SearchService } from '../../core/services/search.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Company } from '../../core/models/company.model';

@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrl: './company-details.component.scss'
})
export class CompanyDetailsComponent {
  private id: number;
  public company: Company = {} as Company;
  public hasData: boolean = false

  constructor(
    public search: SearchService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.company = this.search.getCompany(this.id);
    this.hasData = true;
  }

  goBack() {
    this.router.navigateByUrl('/');
  }

  listOfficers() {
    this.router.navigateByUrl(`/directors/${this.id}`);
  }
}
