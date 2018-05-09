import {Component, OnInit, ViewChild} from '@angular/core';
import {Snippet, SnippetApi} from "../api.service";
import {MatPaginator, MatSort} from "@angular/material";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
    selector: 'app-snippet-list',
    templateUrl: './snippet-list.component.html',
    styleUrls: ['./snippet-list.component.scss']
})
export class SnippetListComponent implements OnInit {

    routerPage: string = '/list';
    items: Snippet[];
    params = {};
    displayedColumns = ['id', 'title', 'language', 'owner', 'created'];

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    constructor(
        private api: SnippetApi,
        private router: Router,
        private activatedRoute: ActivatedRoute,
    ) { }

    ngOnInit() {
        this.setListeners();
    }

    setListeners() {
        this.paramsChangeListener();
        this.sortChangeListener();
    }

    // Listen sort change event
    sortChangeListener() {
        this.sort.sortChange.subscribe(() => {
            this.paginator.pageIndex = 0;
            this.setParam('ordering', (this.sort.direction == 'asc' ? '' : '-') + this.sort.active);
        });
    }

    // Listen params change event
    paramsChangeListener() {
        this.activatedRoute.queryParams.subscribe(params => {
            this.params = params;
            // this.searchInput.value = params['search'] || '';
            this.paginator.pageIndex = parseInt(params['page'] || '1') - 1;
            // this.changeDetectorRefs.detectChanges();
            this.loadItems(); // Print the parameter to the console.
        });
    }

    // Set router parameter
    setParam(key, value) {
        let params = Object.assign({}, this.params);
        if(!value){
            value = undefined;
        }
        if(key != 'page') {
            params['page'] = undefined;
        }
        params[key] = value;
        this.router.navigate([this.routerPage], {queryParams: params});
    }

    // Retrieve from server items and set it
    loadItems() {
        let params = Object.assign({}, this.params);
        let queryset = this.api;
        if(params['ordering']){
            queryset = queryset.order_by(params['ordering']);
            params['ordering'] = undefined;
        }
        queryset
        queryset.all().subscribe((items) => {
            this.items = items;
        });
    }

}
