import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clicommandsrun',
  templateUrl: './clicommandsrun.component.html',
  styleUrls: ['./clicommandsrun.component.scss']
})
export class ClicommandsrunComponent implements OnInit {
  ngcommand = `./node_modules/.bin/ng serve [--port=$port] [$project_name]`;
  constructor() { }

  ngOnInit(): void {
  }

}
