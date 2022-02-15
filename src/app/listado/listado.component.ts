import { Component, Input, OnInit } from '@angular/core';
import { Persona } from '../Persona.models';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  @Input() index:number
  @Input() persona:Persona
 
  constructor() { }

  ngOnInit(): void {
  }

}
