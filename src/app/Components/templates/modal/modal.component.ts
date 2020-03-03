import { Component, OnInit, TemplateRef, ViewChild, ElementRef, Input } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  modalRef: BsModalRef;

  @ViewChild('modalBS', { static: true }) input: ElementRef;
  @Input() title = '';
  constructor(private modalService: BsModalService) {}

  ngOnInit(): void {
  }

  openModal() {
    this.modalRef = this.modalService.show(this.input,
      {
        class: 'modal-dialog-centered modal-lg'
      });
  }

}
