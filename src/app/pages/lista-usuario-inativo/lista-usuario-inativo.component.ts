import { Component, OnInit } from '@angular/core';
import { UsuarioService } from './../../services/usuario.service';
import { UsuarioResponse } from './../../models/usuario';
import * as XLSX from 'xlsx';
@Component({
  selector: 'app-lista-usuario-inativo',
  templateUrl: './lista-usuario-inativo.component.html',
  styleUrls: ['./lista-usuario-inativo.component.scss']
})
export class ListaUsuarioInativoComponent implements OnInit {

  usuarios: UsuarioResponse[] = [];

  constructor(public usuarioService: UsuarioService) {   }

  ngOnInit(): void {
    this.usuarioService.getAllInativos()
    .subscribe(resp =>{
      this.usuarios = resp.content;
    }
    )
  }

  exportExcel() {
    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.usuarios);

    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    XLSX.writeFile(wb, 'Lista de Usuarios Inativos.xlsx');
  }

}
