import {Component, OnInit} from '@angular/core';
import {SnippetApi, UserApi} from "./api.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'app';

    constructor (private snippets: SnippetApi) {}

    ngOnInit(): void {
        this.snippets.get(1).subscribe((item) => {
            console.log(item.owner.username);
        });
    }

}
