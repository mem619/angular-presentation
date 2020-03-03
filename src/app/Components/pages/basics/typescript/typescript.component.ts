import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalComponent } from 'src/app/Components/templates/modal/modal.component';

@Component({
  selector: 'app-typescript',
  templateUrl: './typescript.component.html',
  styleUrls: ['./typescript.component.scss']
})
export class TypescriptComponent implements OnInit {

  @ViewChild(ModalComponent) modal: ModalComponent ;

  constructor() { }

    ngOnInit(): void {
  }

  openModal() {
    this.modal.openModal();
  }

}
