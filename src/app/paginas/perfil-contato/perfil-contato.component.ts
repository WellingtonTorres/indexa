import { Component } from '@angular/core';
import { ContainerComponent } from "../../componentes/container/container.component";
import { Contato } from '../../componentes/contato/contato';

@Component({
    selector: 'app-perfil-contato',
    standalone: true,
    templateUrl: './perfil-contato.component.html',
    styleUrl: './perfil-contato.component.css',
    imports: [ContainerComponent]
})
export class PerfilContatoComponent {

  contato: Contato = {
    id: 0,
    nome: 'dev',
    telefone: '',
    email: 'dev@well.com',
    aniversario: '12/10/1990',
    redes: ''
  }

}
