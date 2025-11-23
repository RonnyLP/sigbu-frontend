import { Injectable } from '@angular/core';
import { BienDto } from '../interfaces/bien-dto';
import { BienesReporteEntradaDto } from '../interfaces/bienes-reporte-entrada-dto';

@Injectable({
  providedIn: 'root',
})
export class BienesService {

  async search(codigo: string): Promise<BienDto> {
    return {
      codigo,
      serie: 'AAA',
      descripcion: 'Itinerario',
      color: 'Royalblue',
      oficina: 'DRSU',
      ubicacion: 'Lima',
      estado: 'ENCONTRADO'
    }
  }

  /**
   * Simula listar bienes por oficina.
   * Reemplazar por una llamada HTTP real cuando exista el backend.
   */
  async listByOficina(oficina: string): Promise<BienDto[]> {
    // Generamos algunos bienes de ejemplo para la oficina solicitada
    return [1, 2, 3, 4].map((n) => ({
      codigo: `${oficina}-${String(n).padStart(3, '0')}`,
      serie: `S${n}`,
      descripcion: `Bien ${n} de ${oficina}`,
      color: n % 2 === 0 ? 'Gray' : 'LightBlue',
      oficina,
      ubicacion: `Piso ${Math.ceil(n / 2)}`,
      estado: 'ENCONTRADO',
    }));
  }

  /**
   * Simula el envío del reporte de entrada. Reemplazar con llamada HTTP real.
   */
  async sendReporteEntrada(dto: BienesReporteEntradaDto): Promise<{ ok: boolean }> {
    console.log('Enviando reporte de entrada:', dto);
    // Aquí iría un fetch/http client real. De momento simulamos respuesta.
    return { ok: true };
  }

  /**
   * Simula el envío de un reporte de salida (eliminar/solicitar salida de bienes).
   */
  async sendReporteSalida(items: BienDto[]): Promise<{ ok: boolean }> {
    console.log('Enviando reporte de salida:', items);
    return { ok: true };
  }

}
