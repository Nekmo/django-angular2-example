import { Component, OnInit } from '@angular/core';
import {Snippet, SnippetApi} from "../api.service";
import {ActivatedRoute} from "@angular/router";

@Component({
    selector: 'app-snippet-detail',
    templateUrl: './snippet-detail.component.html',
    styleUrls: ['./snippet-detail.component.scss']
})
export class SnippetDetailComponent implements OnInit {

    snippet: Snippet;

    constructor(private api: SnippetApi,
                private route: ActivatedRoute) { }

    ngOnInit() {
        let id = +this.route.snapshot.paramMap.get('id');
        this.api.get(id).subscribe((snippet) => {
            this.snippet = snippet;
        })
    }

}
