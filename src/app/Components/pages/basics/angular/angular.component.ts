import { Component, OnInit, ViewChildren, ViewChild, ElementRef } from '@angular/core';
import { ModalComponent } from 'src/app/Components/templates/modal/modal.component';

@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.scss']
})
export class AngularComponent implements OnInit {

  @ViewChild(ModalComponent) modal: ModalComponent ;

  constructor() { }

  ngOnInit(): void {
  }

  openModal() {
    this.modal.openModal();
  }

}
