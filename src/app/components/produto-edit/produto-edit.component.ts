import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { RouterModule, ActivatedRoute, Router } from '@angular/router'; 
import { ProdutoService } from '../../services/produto.service';
import { Produto } from '../../models/produto.model';

@Component({
  selector: 'app-produto-edit',
  standalone: true, 
  imports: [FormsModule, RouterModule], 
  templateUrl: './produto-edit.component.html',
  styleUrls: ['./produto-edit.component.css']
})
export class ProdutoEditComponent implements OnInit {
  produto: Produto = {
    codigo: '',
    nome: '',
    preco: 0
  };

  constructor(
    private produtoService: ProdutoService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.produtoService.buscarProdutoPorId(id).subscribe({
        next: (data) => this.produto = data,
        error: (err) => console.error('Erro ao buscar produto', err)
      });
    }
  }

  atualizarProduto(): void {
    if (this.produto.id) {
      this.produtoService.atualizarProduto(this.produto.id, this.produto).subscribe({
        next: () => this.router.navigate(['/']),
        error: (err) => console.error('Erro ao atualizar produto', err)
      });
    }
  }
}