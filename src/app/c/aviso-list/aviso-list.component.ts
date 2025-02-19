import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common'; //para usar ngForm
import { Aviso } from 'src/app/entidad/Aviso';
import { IonButton, IonIcon, IonThumbnail, IonImg, IonFab, IonFabButton, 
  IonHeader, IonContent ,IonToolbar, IonTitle, IonList, IonItem, IonLabel, 
  IonButtons, IonModal } from '@ionic/angular/standalone';

import { addIcons } from 'ionicons';
import { trashOutline, add } from 'ionicons/icons';

@Component({
  selector: 'app-aviso-list',
  templateUrl: './aviso-list.component.html',
  styleUrls: ['./aviso-list.component.scss'],
  imports: [CommonModule, IonIcon, IonButton, IonList, IonItem, IonLabel, 
    IonThumbnail, IonImg, IonFab, IonFabButton, IonHeader, IonToolbar,
    IonTitle, IonButtons, IonModal ],
  standalone: true,
})

// clase que recive datos del aviso
export class AvisoListComponent  implements OnInit {

  isModalPriceOpen: boolean = false

  @Input() avisos: Aviso[] = [] // arreglo de avisos que empieza con un array vacío

  @Output() onDelete = new EventEmitter<Aviso>()
  @Output() onAddAviso = new EventEmitter<void>()

  constructor() {
      addIcons({trashOutline,add});
   }

  ngOnInit() {}

  clickEliminar(a:Aviso) {
    this.onDelete.emit(a);
    this.setModalPriceOpen(true)
  }

  clickAgregar() {
    this.onAddAviso.emit();
    console.log("ir al form" )
  }

  setModalPriceOpen(abierto:boolean) {
    this.isModalPriceOpen = abierto
  }

}
