import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalComponent } from 'src/app/Components/templates/modal/modal.component';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent implements OnInit {
  dcurrency = `
  //{{ value_expression | currency :currencyCode:display:digitsInfo:locale }}

  a: number = 3356.2564;

  <!--salida '$3,356.26'-->
  <p>{{a | currency}}</p>
  <!--salida 'MX3,356.26'-->
  <p>{{a | currency:'MXN'}}</p>
  <!--salida '$3,356.26'-->
  <p>{{a | currency:'MXN':'$':'.1-2'}}</p>
  <!--salida 'MX$3,356.25640'-->
  <p>{{a | currency:'MXN':'symbol':'4.5'}}</p>

  `;
  ddate = `
  <!--salida '3 ene 2018'-->
  <p>{{ dateObj | date }}</p>
  <!--salida '03/01/18 22:53'-->
  <p>{{ dateObj | date:'short' }}</p>
  <!--salida '22:53'-->
  <p>{{ dateObj | date:'shortTime' }}</p> 
  <!--salida '2018-01-03 10:53'-->  
  <p>{{ dateObj | date:'yyyy-MM-dd hh:mm':"MX":"MX" }}</p>  

  `;
  djson = `
  {{ value_expression | json }}

  <pre>{{object | json}}</pre>
  [object Object]
  {
    "foo": "bar",
    "baz": "qux  
  }

  `;
  dpercent = `
  {{ value_expression | percent :digitsInfo :locale }}
    a: number = 0.15;

    <!--salida '15%'-->
    <p>{{a | percent}}</p>
    <!--salida '0,015.000%'-->
    <p>{{a | percent:'4.3-5'}}</p>
    <!--salida '0 015,000%'-->
    <p>{{a | percent:'4.3-5':'FR'}}</p>

  `;
  dslice = `
  {{ value_expression | slice :start :end }
  collection: string[] = ['a', 'b', 'c', 'd'];

  <ul>
    <li *ngFor="let i of collection | slice:1:3">
      {{i}} //['b', 'c']
    </li>
  </ul>

  `;
  dlower = `
  {{ value_expression | lowercase }}

  description:string = "COLOR ROJA DE 2 PISOS";
  <!--salida 'color roja de 2 pisos'-->
  <p>{{ description | lowercase}}</p>

  `;
  dupper = `
  {{ value_expression | uppercase }}

  description:string = "color roja de 2 pisos";
  <!--salida 'COLOR ROJA DE 2 PISOS'-->
  <p>{{ description | uppercase }}</p>

  `;
  dtitle = `
  {{ value_expression | titlecase  }}

  description:string = "color roja de 2 pisos";
  <!--salida 'Color Roja De 2 Pisos'-->
  <p>{{ description | titlecase}}</p>

  `;

  @ViewChild('examplelazy') mexamplelazy: ModalComponent;

  @ViewChild('currency') mcurrency;
  @ViewChild('date') mdate;
  @ViewChild('json') mjson;
  @ViewChild('percent') mpercent;
  @ViewChild('slice') mslice;
  @ViewChild('lower') mlower;
  @ViewChild('upper') mupper;
  @ViewChild('title') mtitle;

  constructor() { }

  ngOnInit(): void {
  }

  OpenModal(name: string) {
    this[`m${name}`].openModal();
  }
}
