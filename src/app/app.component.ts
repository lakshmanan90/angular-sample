import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-testing';
  public isLoggedIn: boolean = false;

  constructor(private authService: AuthService, private router: Router) {
   
    if (this.authService.getUser() !== null) {
      this.isLoggedIn = true;
    }
  }
  ngOnInit() {
    this.authService.$isLoggedIn.subscribe((data) => {
      if (data) {
        this.isLoggedIn = true;
      } else {
        this.isLoggedIn = false;
      }
    });

  }
  LogOut() {
    this.authService.removeUser();
    this.router.navigate(['register']);
    this.authService.isLogOut();
    
  }
}
