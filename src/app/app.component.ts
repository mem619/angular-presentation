import { Component, HostBinding, HostListener } from '@angular/core';
import { PageStateService } from './Components/page-state.service';
import { Router } from '@angular/router';

export enum KEY_CODE {
  RIGHT_ARROW = 39,
  LEFT_ARROW = 37
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private pageService: PageStateService, private router: Router){}

  title = 'ca-presentation';

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    if (event.keyCode === KEY_CODE.RIGHT_ARROW) {
      this.pageService.next();
      this.router.navigate([`/${this.pageService.page}`]);
    }

    if (event.keyCode === KEY_CODE.LEFT_ARROW) {
      this.pageService.back();
      this.router.navigate([`/${this.pageService.page}`]);
    }
  }
}
