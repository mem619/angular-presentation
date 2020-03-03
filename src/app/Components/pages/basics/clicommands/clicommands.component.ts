import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clicommands',
  templateUrl: './clicommands.component.html',
  styleUrls: ['./clicommands.component.scss']
})
export class ClicommandsComponent implements OnInit {


  ngcommand = `node_modules/.bin/ng`;
  constructor() { }

  ngOnInit(): void {
  }

}
