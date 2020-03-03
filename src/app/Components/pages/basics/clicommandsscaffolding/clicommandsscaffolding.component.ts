import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clicommandsscaffolding',
  templateUrl: './clicommandsscaffolding.component.html',
  styleUrls: ['./clicommandsscaffolding.component.scss']
})
export class ClicommandsscaffoldingComponent implements OnInit {
  ngcommand = `node_modules/.bin/ng generate $element $route_name`;
  constructor() { }

  ngOnInit(): void {
  }

}
