import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {SerializerService} from "./serializer.service";
import {map} from "rxjs/operators";


// @Injectable({
//     providedIn: 'root'
// })
export class ApiService {

    serializer: any;
    url: string;

    constructor(private http: HttpClient) { }


    get(pk) {
        // .map((resp) => (cls ? new this.serializer(resp) : resp))

        return this.pipeHttp(this.http.get(this.getUrl(pk)));
    }

    pipeHttp(observable) {
        return observable.pipe(
            map((resp) => this.convert(resp))
        )
    }

    convert(data) {
        return new this.serializer(self, data)
    }

    getUrl(pk) {
        return `${this.url}${pk}/`;
    }

}
