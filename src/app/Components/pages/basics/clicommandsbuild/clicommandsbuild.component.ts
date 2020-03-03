import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clicommandsbuild',
  templateUrl: './clicommandsbuild.component.html',
  styleUrls: ['./clicommandsbuild.component.scss']
})
export class ClicommandsbuildComponent implements OnInit {
  ngcommand = `./node_modules/.bin/ng build --prod [-c $enviroment]`;

  constructor() { }

  ngOnInit(): void {
  }

}
