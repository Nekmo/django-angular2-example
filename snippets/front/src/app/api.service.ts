import { Injectable } from '@angular/core';
import {ApiService} from "@angular/django/api.service";
import {HttpClient} from "@angular/common/http";
import { map } from 'rxjs/operators';
import {Field, InputConverter, SerializerService} from "@angular/django/serializer.service";
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

    @Field() created: Date;
    @Field() title: string;
    @Field() code: string;
    @Field() linenos: number;
    @Field() language: string;
    @Field() style: string;
    @Field() highlighted: string;

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
