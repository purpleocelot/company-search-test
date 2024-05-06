import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

import { Company } from '../models/company.model';
import { CompanyListResponse } from '../models/company-response.model';
import { CompanyResults, OfficerResults } from '../models/results.model';
import { OfficerListResponse } from '../models/officer-response.model';
import { Officer } from '../models/officer.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  // private baseUrl = 'https://angular-exercise.trunarrative.cloud/TruProxyAPI/rest/Companies/v1/'; // Would store this in Env or config in a full app
  private baseUrl = '/api/'; // Would store this in Env or config in a full app

  constructor(private http: HttpClient) { }

  getCompanies(searchTerm: string): Observable<CompanyResults> {
    const url = `${this.baseUrl}Search?Query=${searchTerm}`;
    return this.http.get<CompanyListResponse>(url)
      .pipe(
        map(response => this.companyMapper(searchTerm, response))
      );
  }

  getOfficers(companyNumber: number): Observable<OfficerResults> {
    const url = `${this.baseUrl}Officers?CompanyNumber=${companyNumber}`;
    return this.http.get<OfficerListResponse>(url)
      .pipe(
        map(response => this.officersMapper(companyNumber, response))
      );
  }

  private companyMapper(searchTerm: string, response: CompanyListResponse): CompanyResults {
    return {
      query: searchTerm,
      total: response.total_results ?? 0,
      pageSize: response.items_per_page,
      page: 1,
      items: response.items?.map(item => {
        return {
          number: Number(item.company_number),
          name: this.toTitleCase(item.title),
          address: item.address_snippet,
          status: item.company_status,
          type: item.company_type,
          incorporated: item.date_of_creation
        } as unknown as Company;
      }) ?? []
    } as CompanyResults
  }

  private officersMapper(companyNumber: number, response: OfficerListResponse): OfficerResults {
    return {
      query: companyNumber.toString(),
      total: response.total_results ?? 0,
      pageSize: response.items_per_page,
      page: 1,
      items: response.items?.map(item => {
        const nameParts = this.toTitleCase(item.name).split(', ');
        const fullName = nameParts.length === 1
          ? item.name
          : `${nameParts[1]} ${nameParts[0]}`;
        return {
          fullName: fullName,
          role: this.toTitleCase(item.officer_role),
        } as unknown as Officer;
      }) ?? []
    } as OfficerResults
  }

  private toTitleCase(text: string): string {
    const parts = text.split(' ');
    return parts
      .map(word => `${word.slice(0, 1).toLocaleUpperCase()}${word.slice(1).toLocaleLowerCase()}`)
      .join(' ');
  }
}
