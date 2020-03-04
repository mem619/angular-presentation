import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalComponent } from 'src/app/Components/templates/modal/modal.component';

@Component({
  selector: 'app-data-types-example-b',
  templateUrl: './data-types-example-b.component.html',
  styleUrls: ['./data-types-example-b.component.scss']
})
export class DataTypesExampleBComponent implements OnInit {
  dexampleany = `var user: any = lib.getUser();\nvar age: any = getAgeOrNull();`;
  dexamplenull = `var user = null; \nvar user = getUser();// return null in not found`;
  dexampleundefined = `var data = {};\ndata.nombre //undefined\nconsole.log(notdeclare);`;
  dexampleunion = `var user: User | null | undefined = lib.getUser();\nvar age: Number | null | undefined = getAgeOrNull();`;

  @ViewChild('exampleany') mexampleany: ModalComponent;
  @ViewChild('examplenull') mexamplenull: ModalComponent;
  @ViewChild('exampleundefined') mexampleundefined: ModalComponent;
  @ViewChild('exampleunion') mexampleunion: ModalComponent;

  constructor() { }

  ngOnInit(): void {
  }

  OpenModal(name: string) {
    this[`m${name}`].openModal();
  }

}
