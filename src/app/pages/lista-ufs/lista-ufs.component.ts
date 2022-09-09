import { UfResponse } from './../../models/uf';
import { Component, OnInit } from '@angular/core';
import { UfService } from './../../services/uf.service';

@Component({
  selector: 'app-lista-ufs',
  templateUrl: './lista-ufs.component.html',
  styleUrls: ['./lista-ufs.component.scss']
})
export class ListaUfsComponent implements OnInit {
  ufs!: UfResponse[];
  constructor(
    private ufService: UfService,
  ) { }

  ngOnInit(): void {
    this.listaUf();
  }

  public listaUf(){

    return this.ufService
      .buscarTodos()
      .subscribe((res) =>{
        console.log(res);
      });

  }

}
