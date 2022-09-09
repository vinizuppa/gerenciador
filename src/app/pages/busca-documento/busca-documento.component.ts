import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { UsuarioResponse } from './../../models/usuario';
import { UsuarioService } from './../../services/usuario.service';
import { FormBuilder, FormGroup, NgControl, Validators, FormControl } from '@angular/forms';
@Component({
  selector: 'app-busca-documento',
  templateUrl: './busca-documento.component.html',
  styleUrls: ['./busca-documento.component.scss']
})
export class BuscaDocumentoComponent implements OnInit {

  documento!: string;
  usuario!: UsuarioResponse;
  form!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    public usuarioService:UsuarioService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.createForm();
  }

  public findByDocumento(documento: string){
    this.usuarioService.findByDocumento(documento)
    .subscribe((res: UsuarioResponse)=>{
      this.usuario = res;
      console.log(res)
    })
  }

  buscar($event:any = ''){
    this.usuarioService
    .findByDocumento($event.target?.value)
    .subscribe((res) => (this.usuario = <any>res));

  }

  createForm() {
    this.form = this.formBuilder.group({
      documento: ['']
    });

  }


}
