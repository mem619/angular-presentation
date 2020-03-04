import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalComponent } from 'src/app/Components/templates/modal/modal.component';

@Component({
  selector: 'app-literals',
  templateUrl: './literals.component.html',
  styleUrls: ['./literals.component.scss']
})
export class LiteralsComponent implements OnInit {
  dexampleliteral = `
  welcomeGenerate (title: string, name: string, lastName: string) {
      return \`Saludos cordiales \${title}. \${name} \${lastName} le damos la bienvenida.\`;
  }

  welcomeGenerate('C', 'Juan', 'Gomez'); //Saludos cordiales C. Juan Gomez le damos la bienvenida.

  welcomeGenerate('Sra', 'Patricia', 'Gonzalez'); //Saludos cordiales Sra. Patricia Gonzalez le damos la bienvenida.

  `;

  @ViewChild('exampleliteral') mexampleliteral: ModalComponent;

  constructor() { }

  ngOnInit(): void {
  }

  OpenModal(name: string) {
    this[`m${name}`].openModal();
  }
}
