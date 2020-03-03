import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalComponent } from 'src/app/Components/templates/modal/modal.component';

@Component({
  selector: 'app-data-types-example-a',
  templateUrl: './data-types-example-a.component.html',
  styleUrls: ['./data-types-example-a.component.scss']
})
export class DataTypesExampleAComponent implements OnInit {
  dexamplenumber = `var age: number = 23; \nvar height: number = 1.92;`;
  dexamplestring = `var name: string = "Juan"; \nvar lastName: string = 'Pérez'; `;
  dexampleboolean = `var active: boolean = true;\nvar active: boolean = false;`;
  dexamplearray = `//Tipo corto\nvar prices: number[] = [103.99, 203, 302.50];\nvar classRoms: string[] = ['A', 'B', 'C'];\n// Tipo Parametrizado\n var prices: Array<number> = [103.99, 203, 302.50];\nvar classRoms: Array<string> = ['A', 'B', 'C'];`;
  dexampleenum = `enum trakingState { Open, Inprogress, Finish }\nenum taskElement { Bug = 22, Work, Impediment }\nenum userType { User = "GRP21", Admin = "GRP73", Guest = "GRP201" };\n\ntrakingState.Open // 0\ntaskElement.Work // 23\nuserType.Admin  // "GRP73"`;

  @ViewChild('examplenumber') mexamplenumber: ModalComponent;
  @ViewChild('examplestring') mexamplestring: ModalComponent;
  @ViewChild('exampleboolean') mexampleboolean: ModalComponent;
  @ViewChild('examplearray') mexamplearray: ModalComponent;
  @ViewChild('exampleenum') mexampleenum: ModalComponent;

  constructor() { }

  ngOnInit(): void {
  }

  OpenModal(name: string) {
    this[`m${name}`].openModal();
  }
}
