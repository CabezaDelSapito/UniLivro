import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface Usuario{
  id: string;
  matricula: string;
  nome: string;
  curso: string;
  senha: String;
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private urlUsuario = 'http://localhost/php/usuario.php';

  constructor(private http: HttpClient) { }

  getUsuario(){
    return this.http.get<[Usuario]>(this.urlUsuario);
  }
}
