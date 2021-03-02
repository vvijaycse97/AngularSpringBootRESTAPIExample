import { Component, OnInit } from '@angular/core';
import { Githubdet } from '../models/githubdet';
@Component({ templateUrl: 'githubdetails.component.html' })
export class GithubdetailsComponent implements OnInit {
    githubdet: any;
    githublogin: any;
    githubcreatedat: any;
    githubupdatedat: any;
    githubpublicrepos: any;
    ghpr:any;
    constructor() {
    } 
    ngOnInit() {
        console.log("Inside onInit()---->");
        localStorage.getItem("githubvalues");
          var obj=JSON.stringify(localStorage.getItem("githubvalues"));         
         // Go through each key of the indexed object:                   
          var changeval=JSON.parse(obj);
          console.log("Entry");         
          githubdet: Githubdet;
         
         this.githubdet =changeval;
        
         this.githublogin=localStorage.getItem('githublogin');
         this.githubcreatedat=localStorage.getItem('githubcreatedat');
         this.githubupdatedat=localStorage.getItem('githubupdatedat');
         this.githubpublicrepos=localStorage.getItem('githubpublicrepos');          
                  
          console.log(localStorage.getItem('githubpublicrepos'));          
          console.log("values set from success page");
          console.log(localStorage.getItem('githublogin'));
         
         localStorage.setItem("githublogin",localStorage.getItem('githublogin'));   
         localStorage.setItem("githubcreatedat",localStorage.getItem('githubcreatedat')); 
         localStorage.setItem("githubupdatedat",localStorage.getItem('githubupdatedat')); 
         localStorage.setItem("githubpublicrepos",localStorage.getItem('githubpublicrepos'));    
         
    }

   
}