import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CountriesService } from 'src/app/countries/service/countries.service';

@Component({
  selector: 'app-delete-button',
  templateUrl: './delete-button.component.html',
  styleUrls: ['./delete-button.component.scss']
})
export class DeleteButtonComponent {
  constructor(
    private countriesService: CountriesService
  ) { }
  isConfirm: boolean = false;

  @Output() newItemEvent = new EventEmitter();
  @Input() id: any;

  openConfirm() {
    this.isConfirm = true;
  }

  closeConfirm() {
    this.isConfirm = false;
  }

  deleteConfirm() {
    this.countriesService.deleteCountry(this.id).subscribe(res => {
      if (res) {
        this.countriesService.getCountries().subscribe(res => {
          this.newItemEvent.emit(res);
          this.closeConfirm()
        })
      }
    });
  }

}
