import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProdutoService } from '../../services/produto.service';
import { Produto } from '../../models/produto.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-produto-list',
  standalone: true, 
  imports: [CommonModule, RouterModule], 
  templateUrl: './produto-list.component.html',
  styleUrls: ['./produto-list.component.css']
})
export class ProdutoListComponent implements OnInit {
  produtos$: Observable<Produto[]> | undefined; 

  constructor(private produtoService: ProdutoService) { }

  ngOnInit(): void {
    this.carregarProdutos();
  }

  carregarProdutos(): void {
    this.produtos$ = this.produtoService.listarProdutos(); 
  }

  removerProduto(id: string): void {
    this.produtoService.removerProduto(id).subscribe({
      next: () => this.carregarProdutos(),
      error: (err) => console.error('Erro ao remover produto', err)
    });
  }
}