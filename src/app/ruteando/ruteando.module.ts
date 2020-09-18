import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
// importo del module principal
import { RouterModule, Routes } from "@angular/router";
import { AdivinaElNumeroComponent } from "../componentes/adivina-el-numero/adivina-el-numero.component";
import { ListadoDeResultadosComponent } from "../componentes/listado-de-resultados/listado-de-resultados.component";
import { LoginComponent } from "../componentes/login/login.component";
import { ErrorComponent } from "../componentes/error/error.component";
import { PrincipalComponent } from "../componentes/principal/principal.component";
import { AgilidadAritmeticaComponent } from "../componentes/agilidad-aritmetica/agilidad-aritmetica.component";
import { AdivinaMasListadoComponent } from "../componentes/adivina-mas-listado/adivina-mas-listado.component";
import { AgilidadMasListadoComponent } from "../componentes/agilidad-mas-listado/agilidad-mas-listado.component";
import { JuegosComponent } from "../componentes/juegos/juegos.component";
import { RegistroComponent } from "../componentes/registro/registro.component";
import { MenuCardComponent } from "../componentes/menu-card/menu-card.component";
import { ListadoDePaisesComponent } from "../componentes/listado-de-paises/listado-de-paises.component";
import { JugadoresListadoComponent } from "../componentes/jugadores-listado/jugadores-listado.component";
import { PiedraPapelTijeraComponent } from "../componentes/piedra-papel-tijera/piedra-papel-tijera.component";
import { AcercaDeComponent } from "../componentes/acerca-de/acerca-de.component";
import { AnagramaComponent } from "../componentes/anagrama/anagrama.component";
import { TatetiComponent } from "../componentes/tateti/tateti.component";
import { SimonDiceComponent } from "../componentes/simon-dice/simon-dice.component";
import { AuthGuard } from "../guards/auth.guard";
import { NologinGuard } from "../guards/nologin.guard";

// declaro donde quiero que se dirija
const MiRuteo = [
  { path: "", component: PrincipalComponent, canActivate: [AuthGuard] },
  { path: "jugadores", component: JugadoresListadoComponent },
  { path: "Login", component: LoginComponent, canActivate: [NologinGuard] },
  {
    path: "Registro",
    component: RegistroComponent,
    canActivate: [NologinGuard],
  },
  {
    path: "Principal",
    component: PrincipalComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "listado",
    component: ListadoDeResultadosComponent,
    canActivate: [NologinGuard],
  },
  { path: "Paises", component: ListadoDePaisesComponent },
  { path: "acercaDe", component: AcercaDeComponent },
  {
    path: "Juegos",
    component: JuegosComponent,
    canActivate: [AuthGuard],
    children: [
      { path: "", component: MenuCardComponent },
      { path: "Adivina", component: AdivinaElNumeroComponent },
      { path: "AdivinaMasListado", component: AdivinaMasListadoComponent },
      { path: "AgilidadaMasListado", component: AgilidadMasListadoComponent },
      { path: "Agilidad", component: AgilidadAritmeticaComponent },
      { path: "Anagrama", component: AnagramaComponent },
      { path: "Tateti", component: TatetiComponent },
      { path: "Simon", component: SimonDiceComponent },
      { path: "PiedraPapelTijera", component: PiedraPapelTijeraComponent },
      { path: "login", component: LoginComponent },
      {
        path: "registro",
        component: RegistroComponent,
      },
    ],
  },
  { path: "**", component: ErrorComponent },
  { path: "error", component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(MiRuteo)],
  exports: [RouterModule],
})
export class RuteandoModule {}
