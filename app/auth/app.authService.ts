import {Injectable, InjectableDecorator} from '@angular/core'; 
import {Http, HttpModule, Headers} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { AppConstants } from '../app.constants';


@Injectable()
export class authService{
    private sampleData:any;
    constructor(public _http:Http){}

    public registerUser(User:Object):Observable<Object>{
       return this._http.post(AppConstants.API_ENDPOINT+'/api/signup',User)
                       .map(res => res.json())
                        .catch((error:any) => Observable.throw(error.json().error || 'Some error'));

                       
    }
}