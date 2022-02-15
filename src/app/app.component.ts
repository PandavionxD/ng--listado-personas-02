import { Component, OnInit } from '@angular/core';
import { Persona } from './Persona.models';
import { PersonaService } from './PersonaService.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  titulo:string = 'Listado de Persona02'

  personas:Persona[]=[]
  
  constructor(private personaService:PersonaService){}

  ngOnInit(): void {
      this.personas= this.personaService.newPerson
  }
  

}
