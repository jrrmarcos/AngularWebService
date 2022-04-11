import { Component, Input, OnInit } from '@angular/core';
import { Produto } from '../Produto';
import { WebService } from '../web.service';

@Component({
  selector: 'app-deletar',
  templateUrl: './deletar.component.html',
  styleUrls: ['./deletar.component.css']
})
export class DeletarComponent implements OnInit {

  constructor(private web : WebService) { }

  @Input() produtoSelecionado: Produto;

  ngOnInit(): void {
  }

  recarregar() : void { 
    alert("Operação cancelada!")
    location.reload()
  }

  deletar() {
    this.web.deletarProduto(this.produtoSelecionado).subscribe(res => {
      if(res.ok == true){
        alert('Exclusão realizada!')
      } else {
        alert('Ocorreu um erro!')
      }
      location.reload()
    })
  }

}
