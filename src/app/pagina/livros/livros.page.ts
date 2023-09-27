import { Component, OnInit } from '@angular/core';
import { Categoria, Livro, LivroService } from 'src/app/servico/livro.service';

@Component({
  selector: 'app-livros',
  templateUrl: './livros.page.html',
  styleUrls: ['./livros.page.scss'],
})
export class LivrosPage implements OnInit {
livros: Livro[];
categorias: Categoria[];

  constructor(private service: LivroService) { }

  ngOnInit() {
    this.service.getLivro().subscribe(response => {
      this.livros = response;
    })
    this.service.getCategoria().subscribe(test => {
      this.categorias = test;
    })
  }

}
