import { Company } from "./company.model";
import { Officer } from "./officer.model";

export interface Results {
  query: string;
  total: number;
  pageSize: number;
  page: number;
}

export interface CompanyResults extends Results {
  items: Company[];
}

export interface OfficerResults extends Results {
  items: Officer[];
}
