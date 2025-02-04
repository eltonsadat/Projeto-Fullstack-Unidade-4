import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { RouterModule } from '@angular/router'; 
import { ProdutoService } from '../../services/produto.service';
import { Produto } from '../../models/produto.model';

@Component({
  selector: 'app-produto-form',
  standalone: true, 
  imports: [FormsModule, RouterModule], 
  templateUrl: './produto-form.component.html',
  styleUrls: ['./produto-form.component.css']
})
export class ProdutoFormComponent {
  produto: Produto = {
    codigo: '',
    nome: '',
    preco: 0
  };

  constructor(private produtoService: ProdutoService) { }

  cadastrarProduto(): void {
    this.produtoService.cadastrarProduto(this.produto).subscribe({
      next: () => console.log('Produto cadastrado com sucesso!'),
      error: (err) => console.error('Erro ao cadastrar produto', err)
    });
  }
}