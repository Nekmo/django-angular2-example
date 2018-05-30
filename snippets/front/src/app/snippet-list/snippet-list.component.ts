import {Component, OnInit, ViewChild} from '@angular/core';
import {Snippet, SnippetApi} from "../api.service";
import {MatInput, MatPaginator, MatSort, MatSortable} from "@angular/material";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
    selector: 'app-snippet-list',
    templateUrl: './snippet-list.component.html',
    styleUrls: ['./snippet-list.component.scss']
})
export class SnippetListComponent implements OnInit {

    readonly routerPage: string = '/list';
    readonly defaultPageIndex: number = 10;
    items: Snippet[];
    params = {};
    firstLoad = true;
    itemsLength: number = 0;
    displayedColumns = ['id', 'title', 'language', 'owner', 'created'];

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;
    @ViewChild(MatInput) searchInput: MatInput;

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
        this.pageChangeListener();
    }

    // Listen sort change event
    sortChangeListener() {
        this.sort.sortChange.subscribe(() => {
            this.setParams({'ordering': (this.sort.direction == 'asc' ? '' : '-') + this.sort.active, 'page': 1});
        });
    }

    // Listen sort change event
    pageChangeListener() {
        this.paginator.page.subscribe((ev) => {
            let pageIndex = ev.pageIndex + 1;

            if(pageIndex == 1) {
                pageIndex = undefined;
            }
            this.setParams({'page_size': ev.pageSize, 'page': pageIndex});
        });

    }

    // Listen params change event
    paramsChangeListener() {
        this.activatedRoute.queryParams.subscribe(params => {
            let originalParams = this.params;
            this.params = params;
            params = Object.assign({}, params);
            // this.searchInput.value = params['search'] || '';
            this.paginator.pageIndex = parseInt(params['page'] || '1') - 1;
            this.paginator.pageSize = parseInt(params['page_size'] || this.defaultPageIndex);
            if(params['ordering'] && this.firstLoad) {
                let direction: 'asc' | 'desc' = 'asc';
                if(params['ordering'][0] == '-') {
                    direction = 'desc';
                    params['ordering'] = params['ordering'].slice(1);
                }
                // this.sort.direction = direction;
                this.firstLoad = false;
                // TODO:
                // this.sort.sort({id: params['ordering'], direction: direction, start: direction});
                this.sort.sort({id: params['ordering'], start: direction, disableClear: true});
            }
            this.searchInput.value = params['search'] || '';
            // this.changeDetectorRefs.detectChanges();
            this.loadItems(); // Print the parameter to the console.
        });
    }

    // Set router parameter
    setParam(key, value) {
        let data = {};
        if(value === '') {
            value = undefined;
        }
        data[key] = value;
        this.setParams(data);
    }

    setParams(newParams) {
        let params = Object.assign({}, this.params);
        params = Object.assign(params, newParams);
        if(params['page_size'] && params['page_size'] == this.defaultPageIndex) {
            params['page_size'] = undefined;
        }
        this.router.navigate([this.routerPage], {queryParams: params});
    }

    // Retrieve from server items and set it
    loadItems() {
        let params = Object.assign({}, this.params);
        let queryset = this.api;
        if(params['ordering']){
            queryset = queryset.orderBy(params['ordering']);
            params['ordering'] = undefined;
        }
        if(params['search']){
            queryset = queryset.search(params['search']);
            params['search'] = undefined;
        }
        queryset = queryset.page(params['page'] || 1, params['page_size']);
        queryset.all().subscribe((items) => {
            this.items = items;
            this.itemsLength = items.count;
        });
    }

}
