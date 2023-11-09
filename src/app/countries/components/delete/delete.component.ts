import { Component, EventEmitter, Output } from '@angular/core';
import { CountriesService } from '../../service/countries.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent {
  constructor(
    private countriesService: CountriesService
  ) { }

  public deleteForm = new FormGroup({
    id: new FormControl('', Validators.required)
  });

  @Output() newItemEvent = new EventEmitter();

  deleteCountry() {
    this.countriesService.deleteCountry(this.deleteForm.value.id).subscribe(res => {
      if (res) {
        this.countriesService.getCountries().subscribe(res => {
          this.newItemEvent.emit(res);
          this.deleteForm.reset();
        })
      }
    });
  }
}
