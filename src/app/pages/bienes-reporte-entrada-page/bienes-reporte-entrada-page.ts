import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BienDto } from '../../interfaces/bien-dto';
import { BienesService } from '../../services/bienes-service';
import { BienesReporteEntradaDto } from '../../interfaces/bienes-reporte-entrada-dto';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-bienes-reporte-entrada-page',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './bienes-reporte-entrada-page.html',
  styleUrls: ['./bienes-reporte-entrada-page.css'],
})
export class BienesReporteEntradaPage {

  bienesService = inject(BienesService);

  items: BienDto[] = [];

  // Add / Edit dialog state
  showAddDialog = false;
  editingIndex: number | null = null;
  form: BienDto = this.emptyBien();

  // Report dialog state
  showReportDialog = false;
  reportSustento = '';

  private emptyBien(): BienDto {
    return {
      codigo: '',
      serie: '',
      descripcion: '',
      color: '',
      oficina: '',
      ubicacion: '',
      estado: '',
    };
  }

  openAdd(): void {
    this.editingIndex = null;
    this.form = this.emptyBien();
    this.showAddDialog = true;
  }

  openEdit(i: number): void {
    this.editingIndex = i;
    this.form = { ...this.items[i] };
    this.showAddDialog = true;
  }

  save(): void {
    if (this.editingIndex === null) {
      this.items.push({ ...this.form });
    } else {
      this.items[this.editingIndex] = { ...this.form };
    }
    this.showAddDialog = false;
  }

  remove(i: number): void {
    this.items.splice(i, 1);
  }

  openGenerateReport(): void {
    this.reportSustento = '';
    this.showReportDialog = true;
  }

  async sendReport(): Promise<void> {
    const dto: BienesReporteEntradaDto = { sustent: this.reportSustento, bienes: this.items };
    try {
      const res = await this.bienesService.sendReporteEntrada(dto);
      if (res && res.ok) {
        // Después de enviar, limpiar lista
        this.items = [];
      }
    } catch (e) {
      console.error('Error enviando reporte', e);
    } finally {
      this.showReportDialog = false;
    }
  }

}
