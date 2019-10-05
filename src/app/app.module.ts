import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import {HttpClientModule} from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/shared/nav-bar/nav-bar.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { SignOutComponent } from './components/sign-out/sign-out.component';
import { ProfileComponent } from './components/profile/profile.component';
import { UserlistComponent } from './components/userlist/userlist.component';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import {OrderListModule} from 'primeng/orderlist';
import { ReposComponent } from './components/repos/repos.component';
import { FavListComponent } from './components/fav-list/fav-list.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SignInComponent,
    SignUpComponent,
    SignOutComponent,
    ProfileComponent,
    UserlistComponent,
    UserDetailComponent,
    ReposComponent,
    FavListComponent
  ],
  imports: [
    BsDatepickerModule.forRoot(),
    BrowserModule,
    MatCardModule,
    MatButtonModule,
    HttpClientModule,
    OrderListModule,
    ReactiveFormsModule,
    MatListModule,
    FormsModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  exports:[
    UserDetailComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
