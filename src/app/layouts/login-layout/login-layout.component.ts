import { Component, OnInit } from '@angular/core';
import { LoginLayoutService } from './login-layout.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-layout',
  templateUrl: './login-layout.component.html',
  styleUrls: ['./login-layout.component.scss'],
})
export class LoginLayoutComponent implements OnInit {
  constructor(
    private loginLayoutService: LoginLayoutService,
    private router: Router
  ) {}

  ngOnInit(): void {}
}
