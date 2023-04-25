import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes)
  },
  {
    path: 'character/:id',
    loadComponent: () =>
      import('./pages/character/character.page').then((m) => m.CharacterPage)
  },
  {
    path: 'filtro',
    loadComponent: () => import('./pages/filtro/filtro.page').then( m => m.FiltroPage)
  },
]