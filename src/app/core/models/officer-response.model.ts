export interface OfficerListResponse {
  // page_number: number;
  kind: string;
  total_results: number;
  items: OfficerResponse[];
  items_per_page: number;
}

export interface OfficerResponse {
  address: Address;
  name: string;
  appointed_on: string;
  officer_role: string;
  links: Links;
  date_of_birth?: DateOfBirth;
  occupation?: string;
  country_of_residence?: string;
  nationality?: string;
  resigned_on?: string;
}

export interface Address {
  premises: string;
  postal_code: string;
  country: string;
  locality: string;
  address_line_1?: string;
  region?: string;
}

export interface Links {
  officer: OfficerAppointment;
}

export interface OfficerAppointment {
  appointments: string;
}

export interface DateOfBirth {
  month: number;
  year: number;
}
