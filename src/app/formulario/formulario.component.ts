import { Component, OnInit } from '@angular/core';
import { Persona } from '../Persona.models';
import { PersonaService } from '../PersonaService.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  nombre:string
  apellido:string

  constructor(private personaService:PersonaService) { }
  
  agregarPersona(){
    let pers01 = new Persona(this.nombre,this.apellido)
    this.personaService.agregarPersona(pers01)
  }
  
  ngOnInit(): void {
  }

}
