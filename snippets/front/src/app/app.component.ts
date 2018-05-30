import {Component, OnInit} from '@angular/core';
import {SnippetApi, UserApi} from "./api.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    title = 'app';

    constructor (private snippets: SnippetApi) {}

    ngOnInit(): void {
    }

}
