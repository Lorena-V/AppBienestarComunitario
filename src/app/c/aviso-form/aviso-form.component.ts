import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common'; //para usar ngForm
import { FormsModule } from '@angular/forms';
import { Camera, CameraResultType } from '@capacitor/camera';
//import { NgModule } from '@angular/core';
import { Aviso } from 'src/app/entidad/Aviso';
import { IonicModule } from '@ionic/angular';
// import { IonButton, IonIcon, IonThumbnail, IonImg, IonFab, IonFabButton, 
//   IonHeader, IonContent ,IonToolbar, IonTitle, IonList, IonItem, IonLabel,
//   IonInput, IonButtons, IonPopover, IonNote } from '@ionic/angular/standalone';
  import { addIcons } from 'ionicons';
  import { cameraOutline, arrowBackOutline, camera } from 'ionicons/icons'

@Component({
  selector: 'app-aviso-form',
  templateUrl: './aviso-form.component.html',
  styleUrls: ['./aviso-form.component.scss'],
  imports: [ IonicModule, CommonModule, FormsModule ],
             
  standalone: true,
})

export class AvisoFormComponent  implements OnInit {

  @Output() onClose = new EventEmitter<void>(); // Evento para cerrar el formulario
  @Output() onSave = new EventEmitter<Aviso>(); // Evento para guardar el aviso

  aviso: Aviso = { titulo: '', 
                  descripcion: '', 
                  imagen: '',
                  fecha: new Date().toISOString() }; // Modelo del aviso

  fotos:string[] = []

  constructor() { 
    addIcons({arrowBackOutline,cameraOutline});
  }

  async tomarFoto() {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.Base64
    });
  
    // Validar si la imagen contiene datos en Base64 antes de agregarla
    if (image.base64String) {
      this.fotos.push(`data:image/jpeg;base64,${image.base64String}`);
    }
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
