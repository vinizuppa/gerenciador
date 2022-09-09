import { UsuarioService } from './../../services/usuario.service';
import { CidadeResponse } from './../../models/cidade';
import { UsuarioRequest, UsuarioResponse, UsuarioUpdateRequest } from './../../models/usuario';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CidadeService } from './../../services/cidade.service';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.scss']
})
export class EditarUsuarioComponent implements OnInit {

  id!: number;
  usuarioRequest!: UsuarioRequest;
  usuarioResponse!: UsuarioResponse;
  formUpdateUsuario!: FormGroup;
  cidades: CidadeResponse [] = [];

  constructor(
    private usuarioService: UsuarioService,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private cidadeService: CidadeService
  ) { }

  ngOnInit(): void {
    this.createForm();
    this.buscaUsuario();
  }

  buscaUsuario(){
    this.id = this.route.snapshot.params['usuarioId'];
    this.usuarioService.findById(this.id)
    .subscribe((res: UsuarioResponse)=>{
      this.usuarioResponse = res;
      console.log(res);
      this.formUpdateUsuario.setValue({
        nome: res.nome,
        email: res.email,
        tipoDocumento: res.tipoDocumento,
        documento: res.documento,
        telefone: res.telefone,
        celular: res.celular,
        rua: res.endereco.rua,
        bairro: res.endereco.bairro,
        numero: res.endereco.numero,
        cep: res.endereco.cep,
        cidadeId: res.endereco.cidadeId,
        clienteStatus: res.clienteStatus
      });
    })
  }

  createForm() {
    this.formUpdateUsuario = this.formBuilder.group({
      nome: ['',[Validators.required, Validators.min(3)]],
      tipoDocumento: ['', [Validators.required]],
      clienteStatus: ['', [Validators.required]],
      documento: ['',[Validators.required, Validators.min(11)]],
      email: ['', [Validators.email]],
      telefone: ['',[Validators.required, Validators.min(10)]],
      celular: ['',[Validators.required, Validators.min(11)]],
      rua: ['', [Validators.required, Validators.max(50)]],
      numero: ['', [Validators.required]],
      bairro: ['', [Validators.required, Validators.max(50)]],
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

  updateUsuario(){
    let usuario: UsuarioUpdateRequest
    usuario = {
      celular : this.formUpdateUsuario.get("celular")?.value,
      documento: this.formUpdateUsuario.get("documento")?.value,
      email: this.formUpdateUsuario.get("email")?.value,
      nome: this.formUpdateUsuario.get("nome")?.value,
      telefone: this.formUpdateUsuario.get("telefone")?.value,
      tipoDocumento: this.formUpdateUsuario.get("tipoDocumento")?.value,
      clienteStatus: this.formUpdateUsuario.get("clienteStatus")?.value,
      endereco: {
        bairro: this.formUpdateUsuario.get("bairro")?.value,
        cep: this.formUpdateUsuario.get("cep")?.value,
        cidadeId: this.formUpdateUsuario.get("cidadeId")?.value,
        numero: this.formUpdateUsuario.get("numero")?.value,
        rua: this.formUpdateUsuario.get("rua")?.value
      }
    }
    this.usuarioService.update(this.id, usuario).subscribe((res:any) => {
      Swal.fire(
        'Usuario atualizado com Sucesso!',
      )
         this.router.navigateByUrl('lista-usuarios');
    })
  }

}
