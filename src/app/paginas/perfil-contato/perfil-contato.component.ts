import { Component, OnInit } from '@angular/core';
import { ContainerComponent } from "../../componentes/container/container.component";
import { Contato } from '../../componentes/contato/contato';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ContatoService } from '../../services/contato.service';

@Component({
    selector: 'app-perfil-contato',
    standalone: true,
    templateUrl: './perfil-contato.component.html',
    styleUrl: './perfil-contato.component.css',
    imports: [
      CommonModule,
      ContainerComponent,
      RouterLink
    ]
})
//ciclo de vida onInit
export class PerfilContatoComponent implements OnInit {

  contato: Contato = {
    id: 0,
    nome: 'dev',
    telefone: '',
    email: 'dev@well.com',
    aniversario: '12/10/1990',
    redes: ''
  }

  constructor(
    private activatedRoute: ActivatedRoute,
    private contatoService: ContatoService
    ) {}
  ngOnInit() {
      const id = this.activatedRoute.snapshot.paramMap.get('id');
      //Adicionar um operador de associação não nula "!", ficaria parseInt(id!)
      if (id) {
        this.contatoService.buscarPorId(parseInt(id)).subscribe((contato) => {
          this.contato = contato
        })    
      }
  }

}
