import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NovoUsuarioComponent } from './pages/novo-usuario/novo-usuario.component';
import { NovaCidadeComponent } from './pages/nova-cidade/nova-cidade.component';
import { ListaUsuariosComponent } from './pages/lista-usuarios/lista-usuarios.component';
import { ListaUfsComponent } from './pages/lista-ufs/lista-ufs.component';
import { ListaCidadesComponent } from './pages/lista-cidades/lista-cidades.component';
import { DetalheCidadeComponent } from './pages/detalhe-cidade/detalhe-cidade.component';
import { EditarCidadeComponent } from './pages/editar-cidade/editar-cidade.component';
import { DetalheUsuarioComponent } from './pages/detalhe-usuario/detalhe-usuario.component';
import { ListaUsuarioAtivoComponent } from './pages/lista-usuario-ativo/lista-usuario-ativo.component';
import { EditarUsuarioComponent } from './pages/editar-usuario/editar-usuario.component';
import { ListaUsuarioInativoComponent } from './pages/lista-usuario-inativo/lista-usuario-inativo.component';
import { BuscaDocumentoComponent } from './pages/busca-documento/busca-documento.component';

const routes: Routes = [
  {path: 'novo-usuario', component:NovoUsuarioComponent},
  {path: '', component:ListaUsuariosComponent},
  {path: 'nova-cidade', component:NovaCidadeComponent},
  {path: 'lista-usuarios', component:ListaUsuariosComponent},
  {path: 'lista-ufs', component:ListaUfsComponent},
  {path: 'lista-cidades', component:ListaCidadesComponent},
  {path: 'detalhe-cidade/:cidadeId', component:DetalheCidadeComponent},
  {path: 'editar-cidade/:cidadeId', component:EditarCidadeComponent},
  {path: 'detalhe-usuario/:usuarioId', component:DetalheUsuarioComponent},
  {path: 'lista-usuario-ativo', component:ListaUsuarioAtivoComponent},
  {path: 'editar-usuario/:usuarioId', component:EditarUsuarioComponent},
  {path: 'lista-usuario-inativo', component:ListaUsuarioInativoComponent},
  {path: 'busca-documento', component:BuscaDocumentoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
