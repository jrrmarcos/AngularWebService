import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produto } from './Produto';

@Injectable({
  providedIn: 'root'
})
export class WebService {

  baseUrl = "https://banco-dados-teste.glitch.me/api"

  getProdutos(): Observable<Produto[]> {
    return this.http.get<Produto[]>(this.baseUrl + "/produtos")
  }

  cadastrarProduto(produto): Observable<any> {
    let body = new HttpParams()
    body = body.set("title", produto.title)
    body = body.set("price", String(produto.price))
    body = body.set("description", produto.description)
    return this.http.post(this.baseUrl + "/produtos", body, { observe: "response" })
  }

  deletarProduto(produto: any): Observable<any> {
    return this.http.delete(this.baseUrl + "/produtos" + "/" + produto._id, { observe: "response" })
  }

  alterarProduto(produto: any): Observable<any> {
    let body = new HttpParams()
    body = body.set("title", produto.title)
    body = body.set("price", String(produto.price))
    body = body.set("description", produto.description)
    return this.http.post(this.baseUrl + "/produtos", body, { observe: "response" })
  }

  constructor(private http: HttpClient) { }

}
