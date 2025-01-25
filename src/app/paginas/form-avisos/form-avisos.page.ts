import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-form-avisos',
  templateUrl: './form-avisos.page.html',
  styleUrls: ['./form-avisos.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class FormAvisosPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
