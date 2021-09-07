import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path:'events',
    loadChildren: () =>  import('./events/events.module').then(m => m.EventsPageModule)
  },
  {
    path: "sign-in",
    loadChildren: () => import('./sign-in/sign-in.module').then(m => m.SignInPageModule)
  },
  {
    path:'library',
    loadChildren: () => import('./library/library.module').then(m => m.LibraryPageModule)
  },{
    path:'friends',
    loadChildren: () => import('./friends/friends.module').then(m => m.FriendsPageModule)
  },
  {
    path:'profile',
    loadChildren: () => import('./profile/profile.module').then(m => m.ProfilePageModule)
  },
  {
    path:'messages',
    loadChildren: () => import('./messages/messages.module').then(m => m.MessagesPageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
