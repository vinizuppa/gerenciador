import { CidadeService } from './../../services/cidade.service';
import { CidadeResponse, content } from './../../models/cidade';
import { UsuarioRequest } from './../../models/usuario';
import { UsuarioService } from './../../services/usuario.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-novo-usuario',
  templateUrl: './novo-usuario.component.html',
  styleUrls: ['./novo-usuario.component.scss']
})
export class NovoUsuarioComponent implements OnInit {
  formCadUsuario!: FormGroup;
  cidades: CidadeResponse [] = [];
  constructor(
    private formBuilder: FormBuilder,
    private usuarioService: UsuarioService,
    private cidadeService: CidadeService,
    private route: ActivatedRoute,
    private router: Router,
    ) {
  }

  ngOnInit(): void {
    this.createForm();
  }
  createForm() {
    this.formCadUsuario = this.formBuilder.group({
      nome: ['',[Validators.required, Validators.min(3)]],
      senha: ['',[Validators.required, Validators.min(6)]],
      tipoDocumento: ['', [Validators.required]],
      documento: ['',[Validators.required, Validators.min(11)]],
      email: ['', [Validators.email]],
      telefone: ['',[Validators.required, Validators.min(10)]],
      celular: ['',[Validators.required, Validators.min(11)]],
      rua: ['', [Validators.required, Validators.min(3)]],
      numero: ['', [Validators.required], Validators.min(1)],
      bairro: ['', [Validators.required, Validators.min(3)]],
      cep: ['', [Validators.required, Validators.min(8)]],
      cidadeId: ['', [Validators.required]],
    });
    this.cidadeService.getAll().subscribe((res: CidadeResponse[]) =>{

      res.forEach(element => {
        this.cidades.push({
          nome: element.nome,
          id: element.id,
          uf: element.uf
        });
      });
    });
  }

  public novoUsuario() {
    let usuarioSubmit: UsuarioRequest
    usuarioSubmit = {
      celular : this.formCadUsuario.get("celular")?.value,
      documento: this.formCadUsuario.get("documento")?.value,
      email: this.formCadUsuario.get("email")?.value,
      nome: this.formCadUsuario.get("nome")?.value,
      telefone: this.formCadUsuario.get("telefone")?.value,
      tipoDocumento: this.formCadUsuario.get("tipoDocumento")?.value,
      senha: this.formCadUsuario.get("senha")?.value,
      endereco: {
        bairro: this.formCadUsuario.get("bairro")?.value,
        cep: this.formCadUsuario.get("cep")?.value,
        cidadeId: this.formCadUsuario.get("cidadeId")?.value,
        numero: this.formCadUsuario.get("numero")?.value,
        rua: this.formCadUsuario.get("rua")?.value
      }
    }
    return this.usuarioService
      .novoUsuario(usuarioSubmit)
      .subscribe((res) => {
        Swal.fire(
          'Usuario cadastrado com Sucesso!',
        )
        this.router.navigateByUrl('');
      }), (error: any) => {

      };
  }

}
