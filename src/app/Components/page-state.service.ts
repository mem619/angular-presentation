import { Injectable } from '@angular/core';
import routes from '../routes';

@Injectable({
  providedIn: 'root'
})
export class PageStateService {
  get page(): number {
    const data = localStorage.getItem('page');
    if (data != null) {
      return +data;
    }

    return 0;
  }

  set page(value: number) {
    localStorage.setItem('page', `${ value }`);
  }

  constructor() { }

  next(): number {
    if (this.page < routes.length - 2) {
      this.page++;
    }

    return this.page;
  }

  back(): number {
    if (this.page !== 0) {
      this.page--;
    }

    return this.page;
  }
}
