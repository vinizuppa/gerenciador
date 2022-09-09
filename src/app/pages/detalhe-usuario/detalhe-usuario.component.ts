import { Component, OnInit } from '@angular/core';
import { UsuarioService } from './../../services/usuario.service';
import { UsuarioResponse } from './../../models/usuario';
import { ActivatedRoute, Route, Router } from '@angular/router';


@Component({
  selector: 'app-detalhe-usuario',
  templateUrl: './detalhe-usuario.component.html',
  styleUrls: ['./detalhe-usuario.component.scss']
})
export class DetalheUsuarioComponent implements OnInit {

  id!: number;
  usuario!: UsuarioResponse;

  constructor(
    public usuarioService:UsuarioService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['usuarioId'];
    this.usuarioService.findById(this.id)
    .subscribe((res: UsuarioResponse)=>{
      this.usuario = res;
    })
  }

}
