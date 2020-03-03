import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalComponent } from 'src/app/Components/templates/modal/modal.component';

@Component({
  selector: 'app-data-types-example-b',
  templateUrl: './data-types-example-b.component.html',
  styleUrls: ['./data-types-example-b.component.scss']
})
export class DataTypesExampleBComponent implements OnInit {
  dexampleany = ``;
  dexamplenull = ``;
  dexampleundefined = ``;
  dexampleunion = ``;

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
