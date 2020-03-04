import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalComponent } from 'src/app/Components/templates/modal/modal.component';

@Component({
  selector: 'app-arrowfunc',
  templateUrl: './arrowfunc.component.html',
  styleUrls: ['./arrowfunc.component.scss']
})
export class ArrowfuncComponent implements OnInit {

  dexamplearrow = `
  function concatNames(name, lastname) {
    return (name + " " + lastname).trim();
  }

  let concatNames = (name, lastname) => (name + " " + lastname).trim();
  concatNames("Verónica","Ovalle"); // "Verónica Ovalle"

  `;
  @ViewChild('examplearrow') mexamplearrow: ModalComponent;

  constructor() { }

  ngOnInit(): void {
  }

  OpenModal(name: string) {
    this[`m${name}`].openModal();
  }
}



