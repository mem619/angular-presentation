import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalComponent } from 'src/app/Components/templates/modal/modal.component';

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.scss']
})
export class ComponentsComponent implements OnInit {
  dexamplelazy = `
  import { Component, OnInit } from '@angular/core';

  @Component({
    selector: 'app-modules-model',
    templateUrl: './modules-model.component.html',
    styleUrls: ['./modules-model.component.scss']
  })
  export class ModulesModelComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

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
