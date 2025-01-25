import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { AvisoListComponent } from '../c/aviso-list/aviso-list.component';
import { Aviso } from '../entidad/Aviso';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, AvisoListComponent ],
})
export class HomePage {

  agenda:Aviso[] = [
    {titulo: "Este es un titulo", descripcion: "Esta es una descripcion", imagen: "imagen"},
    {titulo: "Este es segundo titulo", descripcion: "Esta es segunda descripcion", imagen: "imagen2"}
  ]

  constructor() {}
  
  deleteAviso(aviso:Aviso) {
    console.log("Eliminando el contacto de :" + aviso.titulo)
  }
}
