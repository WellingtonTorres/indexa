import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

import { CabecalhoComponent } from '../../componentes/cabecalho/cabecalho.component';
import { ContainerComponent } from '../../componentes/container/container.component';
import { ContatoComponent } from '../../componentes/contato/contato.component';
import { SeparadorComponent } from '../../componentes/separador/separador.component';
import { FormularioContatoComponent } from '../formulario-contato/formulario-contato.component';

import { ContatoService } from '../../services/contato.service';

interface Contato{
  id: number
  nome: string
  telefone: string
}

@Component({
  selector: 'app-lista-contatos',
  standalone: true,
  imports: [
    CommonModule,
    ContainerComponent,
    CabecalhoComponent,
    SeparadorComponent,
    ContatoComponent,
    FormsModule,
    FormularioContatoComponent,
    RouterLink
  ],
  templateUrl: './lista-contatos.component.html',
  styleUrl: './lista-contatos.component.css'
})
export class ListaContatosComponent {
  alfabeto: string = 'abcdefghijklmnopqrstuvwxyz'
  contatos: Contato[] = [];

  filtroPorTexto: String = ''

  constructor(private contatoService: ContatoService) {
    this.contatos = this.contatoService.obterContatos()
  }

  removeAccents(str:String):String {
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
