import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { movimentacaoService } from '../movimentacao.service';

@Component({
  selector: 'app-mov-produto',
  templateUrl: './mov-produto.component.html',
  styleUrl: './mov-produto.component.scss'
})
export class MovProdutoComponent {
  formulario = new FormGroup({
    id: new FormControl(''),
    dtMovimentacao: new FormControl(''),
    produto: new FormControl(''),
    quantidade: new FormControl(''),
    tipo: new FormControl(''),
  })
  onSave(){
    //chama o serviço para gravas as informações no banco de dados
  let dados = this.formulario.value;

  this.movimentacaoService.salvar(dados).subscribe({
    next:(res)=>{
      console.log(res)
    },
    error:(error)=>{
      console.log(error)
    }
  })
  }
  onCancelar(){
    this.formulario.reset()
  }

constructor(
  private movimentacaoService:movimentacaoService
){}

}