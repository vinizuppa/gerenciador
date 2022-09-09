import { UfResponse } from './../../models/uf';
import { UfService } from './../../services/uf.service';
import { Component, OnInit } from '@angular/core';
import { CidadeRequest } from './../../models/cidade';
import { CidadeService } from './../../services/cidade.service';
import { FormBuilder, FormGroup, NgControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-nova-cidade',
  templateUrl: './nova-cidade.component.html',
  styleUrls: ['./nova-cidade.component.scss']
})
export class NovaCidadeComponent implements OnInit {
  formCadCidade!: FormGroup;
  ufs: UfResponse [] = [];

  constructor(
    private formBuilder: FormBuilder,
    private cidadeService: CidadeService,
    private ufService: UfService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.createForm();
  }
  createForm() {
    this.formCadCidade = this.formBuilder.group({
      nome: ['',[Validators.required, Validators.min(3), Validators.max(150)]],
      ufId: ['',[Validators.required]],
    });
    this.ufService.buscarTodos().subscribe((res: UfResponse[]) =>{

      res.forEach(element => {
        this.ufs.push({
          nome: element.nome,
          id: element.id
        });
      });
    });
  }

  public novaCidade() {
    let cidadeSubmit: CidadeRequest
    cidadeSubmit = {
      nome : this.formCadCidade.get("nome")?.value,
      ufId: this.formCadCidade.get("ufId")?.value
    }
    return this.cidadeService
      .novaCidade(cidadeSubmit)
      .subscribe((res) => {
        Swal.fire(
          'Cidade cadastrado com Sucesso!',
        )
        this.router.navigateByUrl('');
      });
  }

}
