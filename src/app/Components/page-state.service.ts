import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PageStateService {
  page = 0;

  constructor() { }

  next(): number {
    this.page++;
    return this.page;
  }

  back(): number {
    this.page--;
    return this.page;
  }
}
