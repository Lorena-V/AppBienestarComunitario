import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-lista-avisos',
  templateUrl: './lista-avisos.page.html',
  styleUrls: ['./lista-avisos.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class ListaAvisosPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
