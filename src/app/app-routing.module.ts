import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'livros',
    loadChildren: () => import('./pagina/livros/livros.module').then( m => m.LivrosPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pagina/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./pagina/perfil/perfil.module').then( m => m.PerfilPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
