import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalComponent } from 'src/app/Components/templates/modal/modal.component';

@Component({
  selector: 'app-declarations',
  templateUrl: './declarations.component.html',
  styleUrls: ['./declarations.component.scss']
})
export class DeclarationsComponent implements OnInit {

  dexamplelet = `
  function testScope() {
      let a = 5;
      if (true) {
          let a = "Elizabeth";
          console.log(a);  // Elizabeth
      }
      console.log(a); // 5
  }
  console.log(a);  // ReferenceError
`;

  dexampleconst = `
  const i = 0;
  i = 1; // TypeError: Assignment to constant variable.

  const user = { name: "Jasmin", lastName: "Guzman"};
  user = {}; // TypeError: Assignment to constant variable.
  user.name = "Alejandra" // { name: "Alejandra", lastName: "Guzman"};

  `;

  @ViewChild('exampleconst') mexampleconst: ModalComponent;
  @ViewChild('examplelet') mexamplelet: ModalComponent;

  constructor() { }

  ngOnInit(): void {
  }

  OpenModal(name: string) {
    this[`m${name}`].openModal();
  }

}
