import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CountriesService } from '../../service/countries.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  constructor(
    private countriesService: CountriesService
  ) { }

  @Output() newItemEvent = new EventEmitter();
  ngOnInit(): void {
    this.renderCountries();
  }
  renderCountries() {
    this.countriesService.getCountries().subscribe(res => {
      this.newItemEvent.emit(res);
    });
  }
}


