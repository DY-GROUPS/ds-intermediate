import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { HomeComponent } from './home/home.component';
import { SignUpComponent } from './signup/signup.component';
import { SignInComponent } from './sign-in/sign-in.component';


const routes: Routes = [

    {
        path: 'signup', 
        component: SignUpComponent
    },

    {
        path: 'signin', 
        component: SignInComponent
    },

    {
        path: '', 
        component: HomeComponent,
        canActivate: [AuthGuard], 
    }
    
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
