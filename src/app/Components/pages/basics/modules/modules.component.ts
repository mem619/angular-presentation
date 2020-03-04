import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalComponent } from 'src/app/Components/templates/modal/modal.component';

@Component({
  selector: 'app-modules',
  templateUrl: './modules.component.html',
  styleUrls: ['./modules.component.scss']
})
export class ModulesComponent implements OnInit {
  dexamplelazy = `
  //Component route
  import { NgModule } from '@angular/core';
  import { BrowserModule } from '@angular/platform-browser';

  @NgModule({
    imports:      [ BrowserModule ],
    providers:    [ Logger ],
    declarations: [ AppComponent ],
    exports:      [ AppComponent ],
    bootstrap:    [ AppComponent ]
  })

  export class AppModule { }
    `;
  @ViewChild('examplelazy') mexamplelazy: ModalComponent;

  constructor() { }

  ngOnInit(): void {
  }
OpenModal(name: string) {
    this[`m${name}`].openModal();
  }

}
