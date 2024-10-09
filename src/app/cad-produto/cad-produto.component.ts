import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ProdutoService } from '../produto.service';

@Component({
  selector: 'app-cad-produto',
  templateUrl: './cad-produto.component.html',
  styleUrl: './cad-produto.component.scss'
})
export class CadProdutoComponent {
  formulario = new FormGroup({
  id: new FormControl(''),
  nome: new FormControl(''),
  tipo: new FormControl(''),
  link: new FormControl(''),
  id_fabricante: new FormControl(''),
  valor: new FormControl(''),
  Garantia: new FormControl(''),
  Descricao: new FormControl(''),
})
onSave(){
  //chama o serviço para gravas as informações no banco de dados
let dados = this.formulario.value;

this.produtoService.salvar(dados).subscribe({
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
private produtoService:ProdutoService
){}

}