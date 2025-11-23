import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AreaDto } from '../../interfaces/area-dto';
import { BienDto } from '../../interfaces/bien-dto';
import { AreasService } from '../../services/areas-service';
import { BienesService } from '../../services/bienes-service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-bienes-reporte-salida-page',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './bienes-reporte-salida-page.html',
  styleUrls: ['./bienes-reporte-salida-page.css'],
})
export class BienesReporteSalidaPage {

  areasService = inject(AreasService);
  bienesService = inject(BienesService);

  areas: AreaDto[] = [];
  selectedArea = '';
  items: BienDto[] = [];
  selectedMap: Record<string, boolean> = {};
  showConfirmDialog = false;

  constructor() {
    this.loadAreas();
  }

  async loadAreas(): Promise<void> {
    try {
      this.areas = await this.areasService.listAll();
    } catch (e) {
      console.error('Error cargando áreas', e);
    }
  }

  async onAreaChange(): Promise<void> {
    if (!this.selectedArea) {
      this.items = [];
      this.selectedMap = {};
      return;
    }
    try {
      this.items = await this.bienesService.listByOficina(this.selectedArea);
      this.selectedMap = {};
    } catch (e) {
      console.error('Error cargando bienes', e);
    }
  }

  countSelected(): number {
    return this.items.filter((b) => this.selectedMap[b.codigo]).length;
  }

  openGenerateReport(): void {
    if (this.countSelected() === 0) return;
    this.showConfirmDialog = true;
  }

  async confirmRequest(): Promise<void> {
    const toSend = this.items.filter((b) => this.selectedMap[b.codigo]);
    try {
      const res = await this.bienesService.sendReporteSalida(toSend);
      if (res && res.ok) {
        // eliminar los bienes seleccionados de la lista
        this.items = this.items.filter((b) => !this.selectedMap[b.codigo]);
        this.selectedMap = {};
      }
    } catch (e) {
      console.error('Error enviando reporte de salida', e);
    } finally {
      this.showConfirmDialog = false;
    }
  }

  cancelConfirm(): void {
    this.showConfirmDialog = false;
  }

}
