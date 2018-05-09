import { Component, OnInit } from '@angular/core';
import {Snippet, SnippetApi} from "../api.service";

@Component({
    selector: 'app-snippet-list',
    templateUrl: './snippet-list.component.html',
    styleUrls: ['./snippet-list.component.scss']
})
export class SnippetListComponent implements OnInit {

    items: Snippet[];
    displayedColumns = ['id', 'title', 'language', 'owner', 'created'];

    constructor(private api: SnippetApi) { }

    ngOnInit() {
        this.api.all().subscribe((items) => {
            this.items = items;
        });
    }

}
