import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({ templateUrl: 'logout.component.html' })
export class LogoutComponent implements OnInit {
    
    loading = false;
    submitted = false;
    returnUrl: string;   

    constructor(
        
        private route: ActivatedRoute,
        private router: Router,
       
    ) {  } 

    ngOnInit() {
       console.log("LogOut OnInit()");
        localStorage.clear();        
    }
   
}