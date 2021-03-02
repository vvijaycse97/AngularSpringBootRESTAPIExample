import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { UserNameValidator } from '../usernamevalidation';
import { PasswordValidator } from '../passwordvalidation';

@Component({ templateUrl: 'login.component.html' })
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;
    username="";
    password="";

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
       
    ) {
    } 

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            username: ['', [Validators.required, UserNameValidator()]],
            password: ['', [Validators.required,PasswordValidator()]],
        })
        
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    // convenience getter for easy access to form fields
    get f() { return this.loginForm.controls; }

    onSubmit() {
        this.submitted = true;  
        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }
        this.loading = true;
        
     console.log("Login credentials");
     console.log(this.loginForm.get('username').value);
     console.log(this.loginForm.get('password').value);
       
     if(!environment.username.match(this.loginForm.get('username').value) || !environment.password.match(this.loginForm.get('password').value))
     {
        console.log("Enter valid credentials");
        this.router.navigate(['/login']);
     } 
     else
        {
            localStorage.setItem("username",this.username);       
            localStorage.setItem("password",this.password);       
            this.router.navigate(['/success']);
        }  
    }   
}