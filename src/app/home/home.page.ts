import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { AvisoListComponent } from '../c/aviso-list/aviso-list.component';
import { Aviso } from '../entidad/Aviso';
import { AvisosRepositoryService } from '../s/avisos-repository.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, AvisoListComponent ],
})
export class HomePage {

  agenda:Aviso[] = []

  constructor(private servicio:AvisosRepositoryService) {  // inyeccion de dependencias
  }

  ngOnInit() {
    this.cargarInicial();
  }

  async cargarInicial() {
    const a:Aviso = { titulo: "Este es un titulo", descripcion: "esta es una descripción", imagen: "esta es la imagen"}
    await this.servicio.guardar(a)
    this.agenda = await this.servicio.recuperarAvisos();
  }
  
  async deleteAviso(aviso:Aviso) {
    console.log("Eliminando el contacto de :" + aviso.titulo)
    await this.servicio.eliminar(aviso) //llama al metodo que elimina avisos
    this.agenda = await this.servicio.recuperarAvisos() // Recarga la lista actual
    
  }
}
