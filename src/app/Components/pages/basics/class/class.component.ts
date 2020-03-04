import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalComponent } from 'src/app/Components/templates/modal/modal.component';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.scss']
})
export class ClassComponent implements OnInit {
  dexampleclass = `
  class Animal {

    name: string = "unknown";

    constructor(animal?: Animal) {
         Object.assign(this, animal);
    }

    private sleep(): void {
      console.log(this.name + " sleep...");
    }

    protected move(): void {
      console.log(this.name + " moving...");
    }
  }

  class BirdAnimal extends Animal {
    constructor(bird: BirdAnimal) {
      super(bird as Animal)
      Object.assign(this, bird);
    }
  }
  `;

  @ViewChild('exampleclass') mexampleclass: ModalComponent;

  constructor() { }

  ngOnInit(): void {
  }

  OpenModal(name: string) {
    this[`m${name}`].openModal();
  }
}
