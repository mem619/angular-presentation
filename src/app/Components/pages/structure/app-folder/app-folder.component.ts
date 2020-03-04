import { Component, OnInit } from '@angular/core';
const TREE_DATA = [
  {
    name: 'app-routing.module.ts',
    icon: 'fa-folder'
  },
  {
    name: 'app.component.html',
    icon: 'fa-file'
  },
  {
    name: 'app.component.scss',
    icon: 'fa-file'
  },
  {
    name: 'app.component.ts',
    icon: 'fa-file'
  },
  {
    name: 'app.module.ts',
    icon: 'fa-file'
  }
];
@Component({
  selector: 'app-app-folder',
  templateUrl: './app-folder.component.html',
  styleUrls: ['./app-folder.component.scss']
})
export class AppFolderComponent implements OnInit {


  datatree: any;

  constructor() {
    this.datatree = TREE_DATA;
  }

  ngOnInit(): void {
  }



}
