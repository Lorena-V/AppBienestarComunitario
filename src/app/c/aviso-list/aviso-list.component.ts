import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; //para usar ngForm
import { Aviso } from 'src/app/entidad/Aviso';

@Component({
  selector: 'app-aviso-list',
  templateUrl: './aviso-list.component.html',
  styleUrls: ['./aviso-list.component.scss'],
  imports: [CommonModule],
  standalone: true,
})

// clase que recive datos del aviso
export class AvisoListComponent  implements OnInit {

  @Input() avisos: Aviso[] = [] // arreglo de avisos que empieza con un array vacío

  constructor() { }

  ngOnInit() {}

}
