import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface Livro{
  id: string;
  titulo: string;
  categoria: string;
  autor: string;
  descricao: string;
}
export interface Categoria{
  id: string;
  nome: string;
}

@Injectable({
  providedIn: 'root'
})
export class LivroService {
private urlLivro = 'http://127.0.0.1/php/livro';
private urlCategoria = 'http://127.0.0.1/php/categoria';

  constructor(private http: HttpClient) { }

  getLivro(){
    return this.http.get<[Livro]>(this.urlLivro);
  }
  getCategoria(){
    return this.http.get<[Categoria]>(this.urlCategoria);
  }
}
