import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SharedModule } from 'src/app/shared/shared.module';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {
  tokenStorage = JSON.parse(<string>SharedModule.getLocalStorage()).token;
  constructor(private http: HttpClient) { }

  getCountries() {
    return this.http.get(`${environment.API}/pais/listar?token=${this.tokenStorage}`, {})
  }

  searchCountries(filter: string) {
    return this.http.get(`${environment.API}/pais/pesquisar?filtro=${filter}&token=${this.tokenStorage}`, {})
  }

  saveCountry(param: Partial<{ addCountries: string | null; addNationality: string | null; addSigla: string | null; }>) {
    return this.http.post(`${environment.API}/pais/salvar?token=${this.tokenStorage}`, {
      "nome": param.addCountries,
      "gentilico": param.addNationality,
      "sigla": param.addSigla,
    })
  }

  editCountry(param: Partial<{ idCountry: string | null; addCountries: string | null; addNationality: string | null; addSigla: string | null; }>) {
    return this.http.post(`${environment.API}/pais/salvar?token=${this.tokenStorage}`, {
      "id": param.idCountry,
      "nome": param.addCountries,
      "gentilico": param.addNationality,
      "sigla": param.addSigla,
    })
  }

  deleteCountry(id: string | null | undefined) {
    return this.http.get(`${environment.API}/pais/excluir?id=${id}&token=${this.tokenStorage}`, {
    })
  }
}
