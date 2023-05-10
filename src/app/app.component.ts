import { Component } from '@angular/core';
import { Equipo } from './model/seleccion.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'Leidy';
  edad:number = 24;
  pasaLaMateria:boolean = true;
  dato:any = 65;
  contador:number = 0;
  
  aumentar(){
    this.contador=this.contador + 1;
  }

  disminuir(){
    this.contador=this.contador - 1;
  }

  multiplicar(){
    this.contador=this.contador * 2;
  }

  dividir(){
    this.contador=this.contador / 2;
  }

  resetear(){
    this.contador= 0;
  }

  esPar(numero:number):boolean{
    if(numero %2 === 0){
      return true
      
    }else{
      return false
    }
    
  }


  estudiantes:string[]=["Nathalie", "Walter", "Alejandro", "Romario", "Luisa", "Daniela"];

Alemania:Equipo= {
    name: "Selección de Fútbol de Alemania",
    countryname: "Alemania",
    alternativename: "Die Mannschaft",
    colors: ["negro", "rojo" , "dorado"],
    wontitles: ["Mundial de Fútbol: (4) 1954, 1974, 1990, 2014" , "Eurocopa: (3) 1972, 1980, 1996",  "Copa FIFA Confederaciones"],
    captainName: "Manuel Neuer",
    coachname: "Hansi Flick",
    logo: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fcolombia.as.com%2Fresultados%2Fficha%2Fequipo%2Falemania%2F1894%2F&psig=AOvVaw23Z87sbhkJgkmP9yP2v3m0&ust=1683158821648000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCMDAgLDt1_4CFQAAAAAdAAAAABAD",
    abbreviation: "DEU",
    TopScorer: {
      name: "Miroslav Klose",
      number: 71
    },
    Estadio:{
      name: "Allianz Arena",
      nickname: "München Fußball Arena",
      location: "Múnich",
      capacity: 75.024,
    },
    Jugadores:[
      {
        nombre: "Karim David Adeyemi",
        edad: "21",
        altura: "1,8m",
        lugarDeNacimiento: "Múnich, Alemania",
        posición: "Delantero",
        clubActual: "Borussia Dortmund",
        numeroCamiseta: "27",
      },
      {
        nombre: "Thomas Müller",
        edad: "33",
        altura: "1,85m",
        lugarDeNacimiento: "Weilheim in Oberbayern, Alemania",
        posición: "Delantero",
        clubActual: "Bayern de Múnich",
        numeroCamiseta: "25",
      },
      {
        nombre: "Kai Havertz",
        edad: "23",
        altura: "1,9m",
        lugarDeNacimiento: "Aquisgrán, Alemania",
        posición: "Centrocampista",
        clubActual: "Chelsea Football Club",
        numeroCamiseta: "29",
      },
      {
        nombre: "Jamal Musiala",
        edad: "20",
        altura: "1,83m",
        lugarDeNacimiento: "Stuttgart, Alemania",
        posición: "Delantero",
        clubActual: "Bayern de Múnich",
        numeroCamiseta: "42",
      },
      {
        nombre: "Niclas Füllkrug",
        edad: "30",
        altura: "1,89m",
        lugarDeNacimiento: "Hannover, Alemania",
        posición: "Delantero",
        clubActual: "Werder Bremen",
        numeroCamiseta: "11",
      },
      {
        nombre: "Mario Götze",
        edad: "30",
        altura: "1,76m",
        lugarDeNacimiento: "Memmingen, Alemania",
        posición: "Centrocampista",
        clubActual: "Eintracht Frankfurt",
        numeroCamiseta: "27",
      },
      {
        nombre: "Antonio Rüdiger",
        edad: "30",
        altura: "1,9m",
        lugarDeNacimiento: "Berlín, Alemania",
        posición: "Defensa",
        clubActual: "Real Madrid Club de Fútbol",
        numeroCamiseta: "22",
      },
      {
        nombre: "Joshua Kimmich",
        edad: "28",
        altura: "1,77m",
        lugarDeNacimiento: "Rottweil, Alemania",
        posición: "Centrocampista",
        clubActual: "Bayern de Múnich",
        numeroCamiseta: "6",
      },
      {
        nombre: "İlkay Gündoğan",
        edad: "32",
        altura: "1,8m",
        lugarDeNacimiento: "Gelsenkirchen, Alemania",
        posición: "Centrocampista",
        clubActual: "Manchester City Football Club",
        numeroCamiseta: "8",
      },
      {
        nombre: "Leroy Aziz Sané",
        edad: "27",
        altura: "1,83m",
        lugarDeNacimiento: "Essen, Alemania",
        posición: "Delantero",
        clubActual: "Bayern de Múnich",
        numeroCamiseta: "10",
      },
      {
        nombre: "Serge David Gnabry",
        edad: "27",
        altura: "1,76m",
        lugarDeNacimiento: "Stuttgart, Alemania",
        posición: "Delantero",
        clubActual: "Bayern de Múnich",
        numeroCamiseta: "7",
      },










    ]

  }


}





