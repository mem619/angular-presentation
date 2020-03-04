import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalComponent } from 'src/app/Components/templates/modal/modal.component';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss']
})
export class DirectivesComponent implements OnInit {
  dexamplelazy = `
import { Directive, OnInit, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { AuthorizationService } from '../../core/services/authorization.service';

@Directive({
  selector: '[appAuthorize]'
})
export class AuthorizeDirective implements OnInit {

  @Input('appAuthorize') appAuthorize: string | string[];

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef,
    private authorizationService: AuthorizationService
  ) { }

  ngOnInit() {
    this.checkPermissions();
  }

  private checkPermissions(): void {
    if (this.authorizationService.isAuthorized(this.appAuthorize)) {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainerRef.clear();
    }
  }
}

examples.
*ngIF
*ngFor
*ngSwitch
[ngClass]
[ngStyle]
    `;
  @ViewChild('examplelazy') mexamplelazy: ModalComponent;

  constructor() { }

  ngOnInit(): void {
  }

  OpenModal(name: string) {
    this[`m${name}`].openModal();
  }

}
