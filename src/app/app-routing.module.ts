import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { SignOutComponent } from './components/sign-out/sign-out.component';
import { ProfileComponent } from './components/profile/profile.component';
import { UserlistComponent } from './components/userlist/userlist.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { FavListComponent } from './components/fav-list/fav-list.component';


const routes: Routes = [
  {path:'sign-in',component:SignInComponent},
  {path:'sign-up',component:SignUpComponent},
  {path:'sign-out',component:SignOutComponent},
  {path:'profile',component:ProfileComponent},
  {path:'users',component:UserlistComponent},
  {path:'users/:name',component:UserDetailComponent},
  {path:'fav-list',component:FavListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
