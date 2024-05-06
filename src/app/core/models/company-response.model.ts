export interface CompanyListResponse {
  page_number: number;
  kind: string;
  total_results: number;
  items: CompanyResponse[];
  items_per_page: number;
}

export interface CompanyResponse {
  company_status: string;
  address_snippet: string;
  date_of_creation: string;
  matches: Matches;
  description: string;
  links: Links;
  company_number: string;
  title: string;
  company_type: string;
  address: Address
  kind: string;
  description_identifier: string | undefined[];
  date_of_cessation?: string;
}

export interface Matches {
  title: number[];
}

export interface Links {
  self: string;
}

export interface Address {
  premises: string;
  postal_code?: string;
  locality: string;
  region?: string;
  address_line_1: string;
  country?: string;
  address_line_2?: string;
}
