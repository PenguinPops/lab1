import { Routes } from '@angular/router';
import { PodstZnaczComponent } from './podst-znacz/podst-znacz.component';
import { TworzTabelComponent } from './tworz-tabel/tworz-tabel.component';
import { BudFormComponent } from './bud-form/bud-form.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { ObliczeniaComponent } from './obliczenia/obliczenia.component';


export const routes: Routes = [
    {path: "podst-znacz", component:PodstZnaczComponent},
    {path: "tworz-tabel", component:TworzTabelComponent},
    {path: "bud-form", component:BudFormComponent},
    {path: "galeria", component:GaleriaComponent},
    {path: "obliczenia", component:ObliczeniaComponent}
];
