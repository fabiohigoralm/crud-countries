import { Component, EventEmitter, Output } from '@angular/core';
import { CountriesService } from '../../service/countries.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent {
  constructor(
    private countriesService: CountriesService
  ) { }

  public addForm = new FormGroup({
    addCountries: new FormControl('', [Validators.required, Validators.minLength(4), Validators.pattern('[a-zA-Z]*')]),
    addNationality: new FormControl('', [Validators.required, Validators.minLength(4), Validators.pattern('[a-zA-Z]*')]),
    addSigla: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(2), Validators.pattern('[a-zA-Z]*')]),
  });

  @Output() newItemEvent = new EventEmitter();
  saveCountry() {
    this.countriesService.saveCountry(this.addForm.value).subscribe(res => {
      this.countriesService.getCountries().subscribe(res => {
        this.newItemEvent.emit(res);
      })
    });
    this.addForm.reset();
  }
}
