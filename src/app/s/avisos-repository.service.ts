import { Injectable } from '@angular/core';
import { Aviso } from '../entidad/Aviso';
import { Preferences } from '@capacitor/preferences';

@Injectable({
  providedIn: 'root'
})
export class AvisosRepositoryService {

  private clave = "AGENDA";

  constructor() { }

  // metodos para el funcionamiento de la app
  async recuperarAvisos():Promise<Aviso[]> {
    const listado = await Preferences.get({key: this.clave})
    return JSON.parse( listado.value ?? "[]"); // Si es nulo usará una lista vacía
  }

  async guardar(a:Aviso) {
    const listado:Aviso[] = await this.recuperarAvisos()
    listado.push(a)
    Preferences.set({key: this.clave, value: JSON.stringify(listado)});
  }

  buscarAviso(titulo:string) {}

  eliminar(a:Aviso) {} // cargar la lista, buscar el elemento a borrar, llamar al metodo que elimina y hacer el mismo procedimiento
}
