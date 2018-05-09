import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {SerializerService} from "./serializer.service";
import {map} from "rxjs/operators";



export class PagedList extends Array {
    count: number;

    constructor(items?: Array<any>) {
        super(...items);
    }
}


// @Injectable({
//     providedIn: 'root'
// })
export class ApiService {

    serializer: any;
    url: string;
    _queryParams = {};

    constructor(private http: HttpClient) { }


    get(pk) {
        return this.pipeHttp(this.http.get(this.getUrl(pk)));
    }

    create(data) {
        return this.pipeHttp(this.http.get(this.postUrl(), data));
    }

    pipeHttp(observable, listMode = false) {
        return observable.pipe(
            map((resp) => this.convert(resp, listMode))
        );
    }

    convert(data, listMode) {
        if(listMode) {
            let items = data['results'] || data;
            items = new PagedList(items.map((item) => new this.serializer(self, item)));
            items.count = data['count'] || items.length;
            return items;
        }
        return new this.serializer(self, data);
    }

    getUrl(pk) {
        return `${this.url}${pk}/`;
    }

    postUrl() {
        return `${this.url}`;
    }

    order_by(...orderList: string[]) {
        let order: string = orderList.join(',');
        let item = this.copy();
        item.setParams({'ordering': order});
        return item;
    }

    setParams(params) {
        this._queryParams = Object.assign(this._queryParams, params);
    }

    all() {
        return this.pipeHttp(this.http.get(this.url, {params: this._queryParams}), true);
    }

    copy() {
        return new this['__proto__'].constructor(this.http);
    }
}
