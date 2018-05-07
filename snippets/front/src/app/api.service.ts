import { Injectable } from '@angular/core';
import {ApiService} from "./django/api.service";
import {HttpClient} from "@angular/common/http";
import { map } from 'rxjs/operators';
import {InputConverter, SerializerService} from "./django/serializer.service";
import {Observable} from "rxjs/index";


// @Injectable({
//   providedIn: 'root'
// })
export class User extends SerializerService {
    username: string;

}


// @Injectable({
//   providedIn: 'root'
// })
export class Snippet extends SerializerService {

    @InputConverter((api, value) => new User(api, value))
    owner: User;

    // constructor (api, user) {
    //     super(api, user)
    // }

}


@Injectable({
  providedIn: 'root'
})
export class UserApi extends ApiService {

    url = '/api/users/';
    serializer = User;

    constructor(http: HttpClient) {
        super(http);
    }

}


@Injectable({
  providedIn: 'root'
})
export class SnippetApi extends ApiService {

    url = '/api/snippets/';
    serializer = Snippet;

    constructor(http: HttpClient) {
        super(http);
    }
    
}
