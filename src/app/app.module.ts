import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EstadosComponent } from './pages/estados/estados.component';
import { LlamadasComponent } from './pages/llamadas/llamadas.component';
import { CamaraComponent } from './pages/camara/camara.component';
import { ChatsComponent } from './pages/chats/chats.component';
import { ConfiguaricionComponent } from './pages/configuaricion/configuaricion.component';
import { CabeceraComponent } from './components/cabecera/cabecera.component';
import { MinicabeceraComponent } from './components/minicabecera/minicabecera.component';
import { DatosService } from './servicios/datos.service';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { MensajesComponent } from './pages/mensajes/mensajes.component';


@NgModule({
  declarations: [
    AppComponent,
    EstadosComponent,
    LlamadasComponent,
    CamaraComponent,
    ChatsComponent,
    ConfiguaricionComponent,
    CabeceraComponent,
    MinicabeceraComponent,
    UsuarioComponent,
    MensajesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    DatosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
