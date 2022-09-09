import { UfService } from './../../services/uf.service';
import { UfResponse } from './../../models/uf';
import { ActivatedRoute, Router } from '@angular/router';
import { CidadeService } from './../../services/cidade.service';
import { CidadeRequest, CidadeResponse } from './../../models/cidade';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-editar-cidade',
  templateUrl: './editar-cidade.component.html',
  styleUrls: ['./editar-cidade.component.scss']
})
export class EditarCidadeComponent implements OnInit {
  id!: number;
  cidadeRequest!: CidadeRequest;
  cidadeResponse!: CidadeResponse;
  formUpdateCidade!: FormGroup;
  ufs: UfResponse [] = [];

  constructor(
    private cidadeService: CidadeService,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private ufService: UfService,
  ) { }

  ngOnInit(): void {
    this.createForm();
    this.buscaCidade();

  }

  buscaCidade(){
    this.id = this.route.snapshot.params['cidadeId'];
    this.cidadeService.find(this.id)
    .subscribe((res: CidadeResponse)=>{
      this.cidadeResponse = res;
      console.log(res);
      this.formUpdateCidade.setValue({
        nome: res.nome,
        ufId: res.uf.id
      });
    })
  }

  createForm() {
    this.formUpdateCidade = this.formBuilder.group({
      nome: ['',[Validators.required, Validators.min(3)]],
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

  get f(){
    return this.formUpdateCidade.controls;
  }

  updateCidade(){
    this.cidadeService.update(this.id, this.formUpdateCidade.value).subscribe((res:any) => {
      Swal.fire(
        'Cidade atualizada com Sucesso!',
      )
         this.router.navigateByUrl('lista-cidades');
    })
  }

}
