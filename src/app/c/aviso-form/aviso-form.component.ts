import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common'; //para usar ngForm
import { FormsModule } from '@angular/forms';
//import { NgModule } from '@angular/core';
import { Aviso } from 'src/app/entidad/Aviso';
import { IonButton, IonIcon, IonThumbnail, IonImg, IonFab, IonFabButton, 
  IonHeader, IonContent ,IonToolbar, IonTitle, IonList, IonItem, IonLabel,
  IonInput, IonButtons, IonPopover, IonNote } from '@ionic/angular/standalone';
  import { addIcons } from 'ionicons'
  import { cameraOutline, arrowBackOutline } from 'ionicons/icons'


@Component({
  selector: 'app-aviso-form',
  templateUrl: './aviso-form.component.html',
  styleUrls: ['./aviso-form.component.scss'],
  imports: [ IonHeader, IonToolbar, IonTitle, IonItem, IonInput, IonThumbnail, 
             IonIcon, IonButton, IonButtons, CommonModule, FormsModule, IonNote, 
             ],
  standalone: true,
})

export class AvisoFormComponent  implements OnInit {

  @Output() onClose = new EventEmitter<void>(); // Evento para cerrar el formulario
  @Output() onSave = new EventEmitter<Aviso>(); // Evento para guardar el aviso

  aviso: Aviso = { titulo: '', 
                  descripcion: '', 
                  imagen: '',
                  fecha: new Date().toISOString() }; // Modelo del aviso

  constructor() { 
    addIcons({arrowBackOutline,cameraOutline});
  }

  ngOnInit() {}

  cerrarFormulario() {
    this.onClose.emit(); // Cierra el formulario
  }

  guardarAviso() {
    // Emitir el aviso al componente padre
    this.onSave.emit(this.aviso);
    //this.onGuardar.emit(this.aviso);
    this.cerrarFormulario

    this.cerrarFormulario();
  // cerrarFormulario() {
  //   this.onClose.emit(); // Emite el evento para cerrar el formulario
  }

}
