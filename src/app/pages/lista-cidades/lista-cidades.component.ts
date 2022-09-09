import { CidadeRequest, CidadeResponse, content } from './../../models/cidade';
import { CidadeService } from './../../services/cidade.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-cidades',
  templateUrl: './lista-cidades.component.html',
  styleUrls: ['./lista-cidades.component.scss']
})
export class ListaCidadesComponent implements OnInit {

  cidades: CidadeResponse[] = [];

  constructor(public cidadeService: CidadeService) { }

  ngOnInit() {
    this.cidadeService.getAll()
    .subscribe(resp =>{
      this.cidades = resp;
      console.log(this.cidades);
    }
    )
  }



}
