/** Core Services */
import { Component, OnInit } from '@angular/core';

/** User defined Services */
import { authService } from './app.authService'; 

interface userObj{
    name : string,
    email : string,
    dob : String,
    password : string
}

@Component({
    selector: 'Register',
    templateUrl: `app/auth/register.html`,
    providers : [authService],
    styleUrls : []
})

export class AuthComponent {
    private user:userObj;

    ngOnInit():any{
        this.user = {
            name : '',
            email : '',
            dob : '',
            password : ''
        }
    }

    constructor(public _authService:authService){}

    registerUser(){
       
        this._authService
        .registerUser(this.user)
        .subscribe(
            data => console.log(JSON.stringify(data)),
            Error => console.log("There is an error"),
            () => this.ngOnInit()        
        );
    }
 }
