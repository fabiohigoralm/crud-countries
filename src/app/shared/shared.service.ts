import { Injectable } from '@angular/core';
const user = "user_info"

@Injectable({
  providedIn: 'root'
})

export class SharedService {
  constructor() { }

  static saveLocalStorage(p2: any) {
    return localStorage.setItem(user, JSON.stringify(p2))
  }

  static getLocalStorage() {
    return localStorage.getItem(user)
  }

  static removeItemStorage() {
    return localStorage.removeItem(user)
  }

}
