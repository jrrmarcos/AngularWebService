import { Component, Input, OnInit } from '@angular/core';
import { Produto } from '../Produto';
import { WebService } from '../web.service';

@Component({
  selector: 'app-atualizar',
  templateUrl: './atualizar.component.html',
  styleUrls: ['./atualizar.component.css']
})
export class AtualizarComponent implements OnInit {

  @Input() produtoAlterar: Produto

  constructor(private web: WebService) { }

  ngOnInit(): void {
  }

  recarregar(): void {
    alert("Operação cancelada!")
    location.reload()
  }

  alterar() {
    this.web.alterarProduto(this.produtoAlterar).subscribe(res => {
      if (res.ok == true) {
        alert('Produto atualizado com sucesso!')
      } else {
        alert('Ocorreu um erro!')
      }
      location.reload()
    })
  }

}
