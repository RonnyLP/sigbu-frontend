import { Component, inject } from '@angular/core';
import { AreaDto } from '../../interfaces/area-dto';
import { FormsModule } from '@angular/forms';
import { AreasService } from '../../services/areas-service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-areas-consulta-page',
  imports: [FormsModule, RouterModule],
  templateUrl: './areas-consulta-page.html',
  styleUrl: './areas-consulta-page.css',
})
export class AreasConsultaPage {

  areasService = inject(AreasService)

  codigoBusqueda: string = '';
  
  resultado?: AreaDto;


  async buscar() {
    console.log("Buscando...")
    this.resultado = await this.areasService.search(this.codigoBusqueda)
    console.log("Resultado obtenido: ", this.resultado)
  }


}
