import { Component, OnInit } from '@angular/core';
import { IonButton, IonIcon, IonThumbnail, IonImg, IonFab, IonFabButton, 
  IonHeader, IonContent ,IonToolbar, IonTitle, IonList, IonItem, IonLabel,
  IonInput} from '@ionic/angular/standalone';
  import { addIcons } from 'ionicons'
  import { cameraOutline} from 'ionicons/icons'


@Component({
  selector: 'app-aviso-form',
  templateUrl: './aviso-form.component.html',
  styleUrls: ['./aviso-form.component.scss'],
  imports: [ IonHeader, IonToolbar, IonTitle, IonItem, IonInput, IonThumbnail, 
    IonIcon, IonButton ],
  standalone: true,
})
export class AvisoFormComponent  implements OnInit {

  constructor() { 
    addIcons({cameraOutline});
  }

  ngOnInit() {}

}
