import { UsuarioService } from './../../services/usuario.service';
import { UsuarioResponse } from './../../models/usuario';
import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx';
@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.scss']
})
export class ListaUsuariosComponent implements OnInit {

  usuarios: UsuarioResponse[] = [];

  constructor(public usuarioService: UsuarioService) { }

  ngOnInit() {
    this.usuarioService.getAll()
    .subscribe(resp =>{
      this.usuarios = resp.content;
      console.log(this.usuarios);
    }
    )
  }

  exportExcel() {
    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.usuarios);

    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    XLSX.writeFile(wb, 'Lista de Todos Usuarios.xlsx');
  }

}
