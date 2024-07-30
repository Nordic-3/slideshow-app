import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'slideshow-app';
  user? : firebase.default.User | null;
  constructor(private authService : AuthService) {}

  logout(){
    this.authService.logout().then(() => {
    }).catch(error =>{
      console.error(error);
    });
  }

  ngOnInit(): void {
    this.authService.isLoggedIn().subscribe(user => {
      this.user = user;
      localStorage.setItem('user', JSON.stringify(this.user));
    },error => {
      console.error(error);
      localStorage.setItem('user', JSON.stringify('null'));

    });
  }
}
