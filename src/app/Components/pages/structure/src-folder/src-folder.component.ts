import { Component, OnInit } from '@angular/core';
const TREE_DATA = [
  {
    name: 'app',
    icon: 'fa-folder'
  },
  {
    name: 'assets',
    icon: 'fa-folder'
  },
  {
    name: 'environments',
    icon: 'fa-folder'
  },
  {
    name: 'favicon.icon',
    icon: 'fa-file'
  },
  {
    name: 'index.html',
    icon: 'fa-file'
  },
  {
    name: 'main.ts',
    icon: 'fa-file'
  },
  {
    name: 'polyfills.ts',
    icon: 'fa-file'
  },
  {
    name: 'styles.scss',
    icon: 'fa-file'
  },
  {
    name: 'test.ts',
    icon: 'fa-file'
  }
];

@Component({
  selector: 'app-src-folder',
  templateUrl: './src-folder.component.html',
  styleUrls: ['./src-folder.component.scss']
})
export class SrcFolderComponent implements OnInit {

  datatree: any;

  constructor() {
    this.datatree = TREE_DATA;
  }


  ngOnInit(): void {
  }

}
