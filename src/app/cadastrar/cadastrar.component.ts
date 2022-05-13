import { Component, OnInit } from '@angular/core';
import { Produto } from '../Produto';
import { WebService } from '../web.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  listaProdutos: Produto[] = [];

  produto = {
    title: "",
    price: 0,
    description: ""
  }

  constructor(private web: WebService) { }

  cadastrar() {
    this.web.cadastrarProduto(this.produto).subscribe(res => {
      if (res.ok == true) {
        alert("Cadastro realizado com sucesso!")
        location.reload()
      } else {
        alert("Erro!")
      }
    });
  }

  ngOnInit(): void {
  }

}
