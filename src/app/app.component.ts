import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContainerComponent } from './componentes/container/container.component';
import { CabecalhoComponent } from './componentes/cabecalho/cabecalho.component';
import { SeparadorComponent } from './componentes/separador/separador.component';
import { ContatoComponent } from './componentes/contato/contato.component';
import { FormsModule } from '@angular/forms';

interface Contato{
  id: number
  nome: string
  telefone: string
}

import agenda from './agenda.json'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    ContainerComponent,
    CabecalhoComponent,
    SeparadorComponent,
    ContatoComponent,
    FormsModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  alfabeto: string = 'abcdefghijklmnopqrstuvwxyz'
  contatos: Contato[] = agenda;

  filtroPorTexto: String = ''

  removeAccents(str:any):String {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

  }

  filtrarContatosPorTexto (): Contato [] {
    if (!this.filtroPorTexto) {
        return this.contatos
}
    return this.contatos.filter(contato => {
        return this.removeAccents(contato.nome.toLowerCase()).includes (this.removeAccents(this.filtroPorTexto).toLowerCase())
    })
}

  filtrarContatosPorLetraInicial(letra:string) : Contato[] {
    return this.filtrarContatosPorTexto().filter( contato => {
      return contato.nome.toLowerCase().startsWith(letra)
  })
  }
  



}
