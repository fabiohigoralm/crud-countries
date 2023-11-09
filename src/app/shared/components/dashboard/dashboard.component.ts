import { Component, HostListener } from '@angular/core';
import { SharedModule } from '../../shared.module';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  items: any = [];
  isAdmin = JSON.parse(<string>SharedModule.getLocalStorage()).administrador;
  showEditPopup: boolean = false;
  idEdit: any;

  @HostListener('window:popstate', ['$event'])
  onPopState(event: PopStateEvent) {
    SharedModule.removeItemStorage()
  }

  openEditPopup(id: any) {
    this.showEditPopup = true;
    this.idEdit = id;
  }
  closeEditPopup() {
    this.showEditPopup = false;
    this.idEdit = '';
  }

  renderList(newItem: any) {
    this.items = []
    for (let item of newItem) {
      this.items.push(item);
    }
  }

}
