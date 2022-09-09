import { CidadeService } from './../../services/cidade.service';
import { CidadeResponse } from './../../models/cidade';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-detalhe-cidade',
  templateUrl: './detalhe-cidade.component.html',
  styleUrls: ['./detalhe-cidade.component.scss']
})
export class DetalheCidadeComponent implements OnInit {

  id!: number;
  cidade!: CidadeResponse;

  constructor(
    public cidadeService:CidadeService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['cidadeId'];
    this.cidadeService.find(this.id)
    .subscribe((res: CidadeResponse)=>{
      this.cidade = res;
    })
  }

}
