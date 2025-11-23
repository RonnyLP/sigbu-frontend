import { Routes } from '@angular/router';
import { LoginPage } from './app/pages/login-page/login-page';
import { MainDashboardPage } from './app/pages/main-dashboard-page/main-dashboard-page';
import { AreasDashboardPage } from './app/pages/areas-dashboard-page/areas-dashboard-page';
import { BienesDashboardPage } from './app/pages/bienes-dashboard-page/bienes-dashboard-page';
import { BienesConsultaPage } from './app/pages/bienes-consulta-page/bienes-consulta-page';
import { BienesReporteEntradaPage } from './app/pages/bienes-reporte-entrada-page/bienes-reporte-entrada-page';
import { AreasConsultaPage } from './app/pages/areas-consulta-page/areas-consulta-page';
import { AreasAgregarPage } from './app/pages/areas-agregar-page/areas-agregar-page';
import { BienesReporteSalidaPage } from './app/pages/bienes-reporte-salida-page/bienes-reporte-salida-page';

export const routes: Routes = [
  {
    path: "login",
    component: LoginPage,
  },
  {
    path: "",
    component: MainDashboardPage,
  },
  {
    path: "areas-dashboard",
    children: [
      {
        path: "",
        component: AreasDashboardPage,
      },
      {
        path: "consulta",
        component: AreasConsultaPage,
      },
      {
        path: "agregar",
        component: AreasAgregarPage,
      },
    ],
  },
  {
    path: "bienes-dashboard",
    children: [
      {
        path: "",
        component: BienesDashboardPage,
      },
      {
        path: "consulta",
        component: BienesConsultaPage,
      },
      {
        path: "reporte-entrada",
        component: BienesReporteEntradaPage,
      },
      {
        path: "reporte-salida",
        component: BienesReporteSalidaPage,
      },
    ],
  },
  // {
  //   path: "bienes-dashobard/consulta",
  //   component: BienesConsultaPage,
  // }
];
