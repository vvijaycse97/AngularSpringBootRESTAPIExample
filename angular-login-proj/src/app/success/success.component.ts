import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Githubdet } from '../models/githubdet';
import { __param } from 'tslib';

@Component({ templateUrl: 'success.component.html' })
export class SuccessComponent implements OnInit {
    successForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;
    username="";
    password="";
    githubusername="";
    githubdetails="";
    githubloginid="";
    ghusrcrdt="";
    ghusrupdt="";
    ghpublicrepos="";
    githubvalues="";
    githublogin: any;
    githubcreatedat: any;
    githubupdatedat: any;
    githubpublicrepos: any;   
    sbUrl = 'http://localhost:5002/test';
  
    constructor
    (
        private http: HttpClient, 
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,        
   )
    {} 

    ngOnInit() {
        this.username=localStorage.getItem('username');        
        this.password=localStorage.getItem('password');
       console.log("getting env values");      
 
this.successForm = this.formBuilder.group({
    githubusername: ['', Validators.required],
    
})

// get return url from route parameters or default to '/'
this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
}
  // convenience getter for easy access to form fields
  get f() { return this.successForm.controls; }
  
  getSBDetails()
  {
    const params = new HttpParams().append('githubusername', this.githubusername);
    console.log("sb details!!!!!!!!!");
    console.log("param value");
    console.log(params);
    return this.http.get('http://localhost:5002/test',{params});
     }
onSubmit() {
  
    console.log('onSubmit() start!!!!!!');   
        this.submitted = true;        

    // stop here if form is invalid
    if (this.successForm.invalid) {
        return;
    }

    this.loading = true;
    
 this.username=localStorage.getItem('username');        
 this.password=localStorage.getItem('password');
 
 this.githubpublicrepos=localStorage.getItem('githubpublicrepos');
 this.githubpublicrepos="";
 this.getSBDetails().subscribe((res:any) => {
   
  console.log("sb service call details");
  console.log(res);  
  
  githubdet: Githubdet;         
  let map=new Map();
          
           for (let [key,value] of Object.entries(res))
           {           
            map.set(key,value);
          }
          for (let entry of map.entries()) 
         {
          if(entry[0]=='login' && entry[1]=='Invalid User')
           {
             console.log("Invalid User------>"); 
             localStorage.setItem("githublogin","Invalid User"); 
             localStorage.setItem("githubcreatedat",""); 
             localStorage.setItem("githubupdatedat",""); 
             localStorage.setItem("githubpublicrepos","");                              
           }         
         }
           
       for (let entry of map.entries()) 
        {
          console.log("inside map for loop");                 
          console.log("Full map contents");
           console.log(entry[0], entry[1]);            
          console.log("Assigning individual values ");     
          
           if(entry[0]=='login')
           {
             console.log("login value------>");
           console.log(entry[1]); 
           localStorage.setItem("githublogin",entry[1]);           
           }
        else if(entry[0]=='created_at')
        {
          console.log("createdAt value------>");
        console.log(entry[1]);
        localStorage.setItem("githubcreatedat",entry[1]); 
        }
     else if(entry[0]=='updated_at')
        {
          console.log("updatedAt value------>");
        console.log(entry[1]);
        localStorage.setItem("githubupdatedat",entry[1]); 
        }
     else if(entry[0]=='public_repos')
        {
          console.log("publicRepos value------>");
        console.log(entry[1]); 
       localStorage.setItem("githubpublicrepos",entry[1]);
          localStorage.setItem(this.githubpublicrepos,entry[1]);
        }
       }     
     
  this.router.navigate(['/githubdetails']);
});
console.log("Invalid Github User");
return this.router.navigate(['/success']);
}
}
