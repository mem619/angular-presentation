import { Component, OnInit } from '@angular/core';
import { PageStateService } from '../../page-state.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.scss']
})
export class ControlsComponent implements OnInit {

  constructor(private pageService: PageStateService, private router: Router) { }

  ngOnInit() {
  }

  next() {
    this.pageService.next();
    this.router.navigate([`/${this.pageService.page}`]);
  }

  back() {
    this.pageService.back();
    this.router.navigate([`/${this.pageService.page}`]);
  }

}
