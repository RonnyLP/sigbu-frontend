import { Injectable } from '@angular/core';
import { AreaDto } from '../interfaces/area-dto';

@Injectable({
  providedIn: 'root',
})
export class AreasService {
  

  async search(query: string): Promise<AreaDto> {
      return {
        nombre: query,
        responsable: 'Joel',
        dependencia: 'UNTELS',
        ubicacion: 'Lima',
        descripcion: 'Itinerario',
      }
    }

  /**
   * Devuelve una lista simulada de oficinas/áreas.
   * Reemplazar por una llamada HTTP real cuando exista el backend.
   */
  async listAll(): Promise<AreaDto[]> {
    return [
      { nombre: 'DRSU', responsable: 'Joel', dependencia: 'UNTELS', ubicacion: 'Lima', descripcion: 'Oficina DRSU' },
      { nombre: 'ADMIN', responsable: 'Maria', dependencia: 'UNTELS', ubicacion: 'Lima', descripcion: 'Administración' },
      { nombre: 'TI', responsable: 'Carlos', dependencia: 'UNTELS', ubicacion: 'Lima', descripcion: 'Tecnologías' },
    ];
  }
}
