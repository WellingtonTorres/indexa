import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cabecalho',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './cabecalho.component.html',
  styleUrl: './cabecalho.component.css'
})
export class CabecalhoComponent {
  @Input() titulo: string = '';
  @Input() bannerSrc: string = '';
  @Input() telaInicial: boolean = false;
}
