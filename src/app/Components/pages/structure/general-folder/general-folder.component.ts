import { Component, OnInit } from '@angular/core';

const TREE_DATA = [
  {
    name: 'e2e',
    icon: 'fa-folder'
  },
  {
    name: 'node_modules',
    icon: 'fa-folder'
  },
  {
    name: 'src',
    icon: 'fa-folder'
  },
  {
    name: '.editorconfig',
    icon: 'fa-codepen'
  },
  {
    name: '.gitignore',
    icon: 'fa-git'
  },
  {
    name: 'angular.json',
    icon: 'fa-cog'
  },
  {
    name: 'browserlist',
    icon: 'fa-file'
  },
  {
    name: 'karma.conf.js',
    icon: 'fa-file'
  },
  {
    name: 'package-lock.json',
    icon: 'fa-file'
  },
  {
    name: 'package.json',
    icon: 'fa-archive'
  },
  {
    name: 'README.md',
    icon: 'fa-file'
  },
  {
    name: 'tsconfig.app.json',
    icon: 'fa-file'
  },
  {
    name: 'tsconfig.json',
    icon: 'fa-file'
  },
  {
    name: 'tsconfig.spec.json',
    icon: 'fa-file'
  },
  {
    name: 'tslint.jsontslint.json',
    icon: 'fa-file'
   }
];

@Component({
  selector: 'app-general-folder',
  templateUrl: './general-folder.component.html',
  styleUrls: ['./general-folder.component.scss']
})
export class GeneralFolderComponent implements OnInit {
  datatree: any;

  constructor() {
    this.datatree = TREE_DATA;
  }

  ngOnInit(): void {
  }

}
