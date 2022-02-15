import { Injectable } from "@angular/core";
import { LoggingService } from "./loggingService.service";
import { Persona } from "./Persona.models";



@Injectable()
export class PersonaService{
    newPerson : Persona[]=[
        new Persona('alex','artica'),
        new Persona('daniel','rivera')
    ]
    
    constructor(private loggingService:LoggingService){}
    
    agregarPersona(persona:Persona){
        this.loggingService.mensajeCOnsola(`La persona Agregada es: ${persona.nombre} ${persona.apellido}`)
        this.newPerson.push(persona)
    }
}