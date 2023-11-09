import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedService } from './shared.service';
import { HeaderComponent } from './components/header/header.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ListComponent } from '../countries/components/list/list.component';
import { SearchComponent } from '../countries/components/search/search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddComponent } from '../countries/components/add/add.component';
import { DeleteComponent } from '../countries/components/delete/delete.component';
import { EditComponent } from '../countries/components/edit/edit.component';
import { DeleteButtonComponent } from '../countries/components/delete/delete-button/delete-button.component';

@NgModule({
  declarations: [
    HeaderComponent,
    DashboardComponent,
    ListComponent,
    SearchComponent,
    AddComponent,
    DeleteComponent,
    EditComponent,
    DeleteButtonComponent,

  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class SharedModule {
  static saveLocalStorage(p2: any) {
    return SharedService.saveLocalStorage(p2)
  }

  static getLocalStorage() {
    return SharedService.getLocalStorage()
  }

  static removeItemStorage() {
    return SharedService.removeItemStorage()
  }

}

