import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  constructor(private authService : AuthService, private router : Router) {}

  email = new FormControl<string>('');
  psw = new FormControl<string>('');
  success = true;

  login(){
   this.authService.login(this.email.value || "", this.psw.value || "").then(cred => {
    this.router.navigateByUrl('/watch');
   }).catch(error => {
    this.success = false;
   }); 
  }

}
