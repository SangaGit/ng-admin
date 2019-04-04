import { Injectable } from "@angular/core";
import { Http,Headers } from "@angular/http";
import{ User } from '../entities/User';

@Injectable()
export class RegistrationService{

url : string = `http://localhost:51225/Home/Signup/?`;
    constructor(private _http : Http){

    }

    signUp(user : User){
    let params = new URLSearchParams();
    params.set("email", user.email);
    params.set("fName", user.fName);
    params.set("lName", user.lName);  // => Left side must match Controller method parameter
    params.set("password", user.password);

    // Setup the http request
    let lHttpRequestBody = params.toString()
    return this._http.get(this.url+lHttpRequestBody);
    }
}

