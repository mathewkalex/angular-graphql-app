import { Component } from '@angular/core';
import { CountriesService } from '../countries.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent {
  displayedColumns: string[] = [
    'name',
    'capital',
    'currency',
    'emoji',
    'phone',
    'continent',
  ];
  dataSource$ = this.countriesService.getCountries();

  constructor(private countriesService: CountriesService) {}
}