import { UsuarioService } from './../../services/usuario.service';
import { UsuarioResponse } from './../../models/usuario';
import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-lista-usuario-ativo',
  templateUrl: './lista-usuario-ativo.component.html',
  styleUrls: ['./lista-usuario-ativo.component.scss']
})
export class ListaUsuarioAtivoComponent implements OnInit {

  usuarios: UsuarioResponse[] = [];

  constructor(public usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.usuarioService.getAllAtivos()
    .subscribe(resp =>{
      this.usuarios = resp.content;
    }
    )
  }

  exportExcel() {
    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.usuarios);

    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    XLSX.writeFile(wb, 'Lista de Usuarios Ativos.xlsx');
  }

}
