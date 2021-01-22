import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountriesComponent } from './components/countries/countries.component';
import { HomeComponent } from './components/home/home.component';
import { LuxembourgComponent } from './components/luxembourg/luxembourg.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'luxembourg',
    component: LuxembourgComponent
  },
  {
    path: 'countries',
    component: CountriesComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
