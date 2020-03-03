import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.scss']
})
export class ThemeComponent implements OnInit {

  @Input() color = '#0047ba';
  @Input() title = '';

  constructor() { }

  ngOnInit() {
  }

}
