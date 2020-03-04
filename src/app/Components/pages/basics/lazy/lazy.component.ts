import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalComponent } from 'src/app/Components/templates/modal/modal.component';

@Component({
  selector: 'app-lazy',
  templateUrl: './lazy.component.html',
  styleUrls: ['./lazy.component.scss']
})
export class LazyComponent implements OnInit {
  dexamplelazy = `
  //Component route
    {
      path: '',
      component: LoginComponent
    }

  //Module route with lazy
    {
      path: 'login',
      loadChildren: './modules/login/login.module#LoginModule'
      loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule);
    }
    `;
  @ViewChild('examplelazy') mexamplelazy: ModalComponent;

  constructor() { }

  ngOnInit(): void {
  }

  OpenModal(name: string) {
    this[`m${name}`].openModal();
  }

}
