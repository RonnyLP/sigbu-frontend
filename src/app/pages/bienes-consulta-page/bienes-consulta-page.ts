import { Component, inject } from '@angular/core';
import { BienesService } from '../../services/bienes-service';
import { FormsModule } from '@angular/forms';
import { BienDto } from '../../interfaces/bien-dto';

@Component({
  selector: 'app-bienes-consulta-page',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './bienes-consulta-page.html',
  styleUrl: './bienes-consulta-page.css',
})
export class BienesConsultaPage {

  bienesService = inject(BienesService)


  codigoBusqueda: string = '';
  
  resultado?: BienDto;


  async buscar() {
    console.log("Buscando...")
    this.resultado = await this.bienesService.search(this.codigoBusqueda)
    console.log("Resultado obtenido: ", this.resultado)
  }


}
