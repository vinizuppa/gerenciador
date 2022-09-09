import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NovoUsuarioComponent } from './pages/novo-usuario/novo-usuario.component';
import { Router, RouterModule } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { HttpClientModule } from '@angular/common/http';
import { NovaCidadeComponent } from './pages/nova-cidade/nova-cidade.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ListaUsuariosComponent } from './pages/lista-usuarios/lista-usuarios.component';
import { ListaUfsComponent } from './pages/lista-ufs/lista-ufs.component'
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { NgxMaskModule, IConfig } from 'ngx-mask';
import { ListaCidadesComponent } from './pages/lista-cidades/lista-cidades.component';
import { DetalheCidadeComponent } from './pages/detalhe-cidade/detalhe-cidade.component';
import { EditarCidadeComponent } from './pages/editar-cidade/editar-cidade.component';
import { DetalheUsuarioComponent } from './pages/detalhe-usuario/detalhe-usuario.component';
import { ListaUsuarioAtivoComponent } from './pages/lista-usuario-ativo/lista-usuario-ativo.component';
import { EditarUsuarioComponent } from './pages/editar-usuario/editar-usuario.component';
import { ListaUsuarioInativoComponent } from './pages/lista-usuario-inativo/lista-usuario-inativo.component';
import { BuscaDocumentoComponent } from './pages/busca-documento/busca-documento.component'
@NgModule({
  declarations: [
    AppComponent,
    NovoUsuarioComponent,
    HeaderComponent,
    FooterComponent,
    NovaCidadeComponent,
    ListaUsuariosComponent,
    ListaUfsComponent,
    ListaCidadesComponent,
    DetalheCidadeComponent,
    EditarCidadeComponent,
    DetalheUsuarioComponent,
    ListaUsuarioAtivoComponent,
    EditarUsuarioComponent,
    ListaUsuarioInativoComponent,
    BuscaDocumentoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    MatListModule,
    HttpClientModule,
    FlexLayoutModule,
    MatMenuModule,
    MatIconModule,
    NgxMaskModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
