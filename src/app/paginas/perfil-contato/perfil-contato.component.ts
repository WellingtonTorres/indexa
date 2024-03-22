import { Component, OnInit } from '@angular/core';
import { ContainerComponent } from "../../componentes/container/container.component";
import { Contato } from '../../componentes/contato/contato';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ContatoService } from '../../services/contato.service';
import { SeparadorComponent } from '../../componentes/separador/separador.component';

@Component({
    selector: 'app-perfil-contato',
    standalone: true,
    templateUrl: './perfil-contato.component.html',
    styleUrl: './perfil-contato.component.css',
    imports: [
      CommonModule,
      ContainerComponent,
      RouterLink,
      SeparadorComponent
    ]
})
//ciclo de vida onInit
export class PerfilContatoComponent implements OnInit {

  contato: Contato = {
    id: 0,
    nome: 'dev',
    avatar: '',
    telefone: '',
    email: 'dev@well.com',
    aniversario: '12/10/1990',
    redes: ''
  }

  constructor(
    private activatedRoute: ActivatedRoute,
    private contatoService: ContatoService,
    private router: Router
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

  excluir() {
    if (this.contato.id) {
      this.contatoService.excluirContato(this.contato.id).subscribe(() => {
          this.router.navigateByUrl('/lista-contatos')
      })
    }
  }

}
