import { NgModule } from '@angular/core';
import { PreloadAllModules,Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
 
  {
    path: 'welcome',
    loadChildren: () => import('./welcome/welcome.module').then( m => m.WelcomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'select-country',
    loadChildren: () => import('./pages/select-country/select-country.module').then( m => m.SelectCountryPageModule)
    
  },
  {
    path: 'countrywise',
    loadChildren: () => import('./countrywise/countrywise.module').then( m => m.countrywisepageModule)
  },  {
    path: 'overview',
    loadChildren: () => import('./overview/overview.module').then( m => m.OverviewPageModule)
  },
  {
    path: 'prevention',
    loadChildren: () => import('./prevention/prevention.module').then( m => m.PreventionPageModule)
  },
  {
    path: 'symptoms',
    loadChildren: () => import('./symptoms/symptoms.module').then( m => m.SymptomsPageModule)
  },
  {
    path: 'statistics',
    loadChildren: () => import('./statistics/statistics.module').then( m => m.StatisticsPageModule)
  },

 
 

  
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
