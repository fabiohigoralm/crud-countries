import { Component, EventEmitter, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CountriesService } from '../../service/countries.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']

})
export class SearchComponent {

  public searchForm = new FormGroup({
    filter: new FormControl('')
  });

  @Output() newItemEvent = new EventEmitter();
  constructor(
    public countriesService: CountriesService,
  ) { }

  searchCountries() {
    this.countriesService.searchCountries(<string>this.searchForm.value.filter).subscribe(res => {
      this.newItemEvent.emit(res);
      this.searchForm.setValue({
        filter: ''
      })
    })
  }


}
