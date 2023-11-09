import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CountriesService } from '../../service/countries.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  constructor(
    private countriesService: CountriesService
  ) { }

  @Input() id: any;
  @Input() list: any;
  @Output() newItemEvent = new EventEmitter();
  @Output() closeEditPopup = new EventEmitter();

  public editForm = new FormGroup({
    addCountries: new FormControl('', [Validators.required, Validators.minLength(4), Validators.pattern('[a-zA-Z]*')]),
    addNationality: new FormControl('', [Validators.required, Validators.minLength(4), Validators.pattern('[a-zA-Z]*')]),
    addSigla: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(2), Validators.pattern('[a-zA-Z]*')]),
  });

  editCountry() {
    this.countriesService.editCountry({ "idCountry": this.id, ...this.editForm.value }).subscribe(res => {
      this.countriesService.getCountries().subscribe(res => {
        this.newItemEvent.emit(res);
        this.editForm.reset();
        this.closeEditPopup.emit();
      })
    });
  }

  cancelEdit() {
    this.editForm.reset();
    this.closeEditPopup.emit();
  }

  findObjectById(id: any) {
    return this.list.find((obj: { id: any; }) => obj.id === id);
  }

  ngOnInit(): void {
    const item = this.findObjectById(this.id);
    this.editForm.patchValue({
      addCountries: item.nome,
      addNationality: item.gentilico,
      addSigla: item.sigla
    });
  }
}
