import { Component, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common'; //para usar ngForm
import { AvisoListComponent } from '../c/aviso-list/aviso-list.component';
import { AvisoFormComponent } from '../c/aviso-form/aviso-form.component';
import { Aviso } from '../entidad/Aviso';
import { AvisosRepositoryService } from '../s/avisos-repository.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [AvisoListComponent, AvisoFormComponent, CommonModule ],
  standalone: true,
})

export class HomePage {

  agenda:Aviso[] = []
  mostrandoForm: boolean = false // Controla si se muestra el formulario o la lista

  constructor(private servicio:AvisosRepositoryService) {  // inyeccion de dependencias
  }

  ngOnInit() {
    //this.cargarInicial();
  }

  // async cargarInicial() {
  //   const a:Aviso = { titulo: "Este es un titulo", descripcion: "esta es una descripción", imagen: "esta es la imagen"}
  //   await this.servicio.guardar(a)
  //   this.agenda = await this.servicio.recuperarAvisos();
  // }
  
  async deleteAviso(aviso:Aviso) {
    console.log("Eliminando el contacto de :" + aviso.titulo)
    await this.servicio.eliminar(aviso) //llama al metodo que elimina avisos
    this.agenda = await this.servicio.recuperarAvisos() // Recarga la lista actual
  }

  mostrarFormulario() {
    this.mostrandoForm = true; // Cambia el estado para mostrar el formulario
  }

  cerrarFormulario() {
    this.mostrandoForm = false; // Cambia el estado para volver a la lista
  }

  async guardarAviso(aviso: Aviso) {
    await this.servicio.guardar(aviso); // Guarda el nuevo aviso
    this.agenda = await this.servicio.recuperarAvisos(); // Recarga la lista
    this.cerrarFormulario(); // Regresa a la lista
  }

}
