import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-cad-usuario',
  templateUrl: './cad-usuario.component.html',
  styleUrl: './cad-usuario.component.scss'
})
export class CadUsuarioComponent {
  formulario = new FormGroup({
    nome: new FormControl(''),
    sobrenome: new FormControl(''),
    senha: new FormControl(''),
    telefone: new FormControl(''),
    email: new FormControl(''),
    acao: new FormControl(''),
    dt_de_nascimento: new FormControl(''),
  })
  onSave(){
    //chama o serviço para gravas as informações no banco de dados
  let dados = this.formulario.value;

  this.usuarioService.salvar(dados).subscribe({
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
  private usuarioService:UsuarioService
){}

}


