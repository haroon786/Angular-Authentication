import { Component, OnInit } from '@angular/core';
import {FormGroup,FormArray,FormBuilder,Validators} from '@angular/forms';
import {Router} from '@angular/router';

import { AuthService } from '../shared/authentication/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginform:FormGroup;
  constructor(private fb:FormBuilder,private authService: AuthService,private router: Router) {

        this.loginform = this.fb.group({
            email: ['',Validators.required],
            password: ['',Validators.required]
        });
    }
    ngOnInit() {

    }

    login()
    {
      const logindeatials=this.loginform.value
      if(logindeatials.email && logindeatials.password)
      {
       // this.authService.login(val.email,valpassword)
        {

        }
      }
    }


}
