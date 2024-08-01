import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './services/auth/auth.guard';

const routes: Routes = [
  { path: 'show', loadChildren: () => import('./pages/slideshow/slideshow.module').then(m => m.SlideshowModule), canActivate: [authGuard] },
  { path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule) },
  { path: 'watch', loadChildren: () => import('./pages/watch/watch.module').then(m => m.WatchModule), canActivate: [authGuard]  },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
