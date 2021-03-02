export class Githubdet {
    login: string;
    email:string;
    company:string;
    location:string;
    createdAt: string;
    updatedAt:string;
    publicRepos:string;
    constructor(public _login: string, public _email: string,public _company: string,public _location: string,public _createdAt: string,public _updatedAt: string,
        public _publicRepos: string) {
        this.login = _login;
        this.email=_email;
        this.company=_company;
        this.location=_location;
        this.createdAt = _createdAt;
        this.updatedAt = _updatedAt;
        this.publicRepos = _publicRepos;
    }
}