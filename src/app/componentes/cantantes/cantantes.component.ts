import { emitDistinctChangesOnlyDefaultValue } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Cantante } from 'src/app/model/cantante.model';

@Component({
  selector: 'cantantes',
  templateUrl: './cantantes.component.html',
  styleUrls: ['./cantantes.component.css']
})
export class CantantesComponent implements OnInit {
  
    cantantes:Cantante[]= [
      {
        nombre: "Hector Lavoe",
        edad: 47,
        vivo: false,
      },

      {
        nombre: "Willie Colón",
        edad: 73,
        vivo: true,
      },

      {
        nombre: "Bob Marley",
        edad: 36,
        vivo: false,
      },

      {
        nombre: "Karol G",
        edad: 32,
        vivo: true,
      },

      {
        nombre: "Julio Jaramillo",
        edad: 43,
        vivo: false,
      },

      {
        nombre: "Alci Acosta",
        edad: 84,
        vivo: true,
      },

      {
        nombre: "Dario Gomez",
        edad: 71,
        vivo: false,
      },

      {
        nombre: "Pastor Lopez",
        edad: 75,
        vivo: false,
      },

      {
        nombre: "Canserbero",
        edad: 27,
        vivo: false,
      },

      
      {
        nombre: "Lauryn Hill",
        edad: 47,
        vivo: true,
      },
      

    ]
  
  ngOnInit(): void {
    console.log("Hola");
    console.log(this.cantantes[0].nombre);
    console.log(this.cantantes[0].nombre.length);
    console.log(this.cantantes[0].nombre.charAt(1));
    console.log(this.cantantes[0].nombre.substring(1,4));
    console.log(this.cantantes[0].nombre.replace("Lavoe","Lavanda"));
    console.log(this.cantantes[0].nombre.toUpperCase());
    console.log(this.cantantes[0].nombre.concat(" Sanchez"));
    console.log(this.cantantes[0].nombre.indexOf("Lavoe"));
    console.log(this.cantantes[0].nombre.includes("Lavoe"));
    console.log(this.cantantes[0].nombre.startsWith("Hec"));
    console.log(this.cantantes);
    console.table(this.cantantes[2]);
    console.log(this.cantantes.length);
    //Elimina el ultimo elemento this.cantantes.pop(),
    this.cantantes.pop();
    //Elimina el primer elemento this.cantantes.shift(),
    this.cantantes.shift();
    this.cantantes.splice(2,1);
    console.log(this.cantantes);
    let nuevoCantante:Cantante= {
      nombre:"Ana Gabriel",
      edad:67,
      vivo:true,
    }
    this.cantantes.push(nuevoCantante);
    console.log(this.cantantes);

    let nombres = this.cantantes.map(cantante => cantante.nombre.toUpperCase()).sort().reverse();
    console.log(nombres);

    let sumas = this.cantantes.map(cantante => cantante.edad);
    console.log(sumas);

    let raices = this.cantantes.map(cantante => Math.sqrt(cantante.edad));
    console.log(raices);

    let potencia = this.cantantes.map(cantante => Math.pow(cantante.edad ,2));
    console.log(potencia);


    
    





  }
  

}