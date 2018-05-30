import { Component, OnInit } from '@angular/core';
import {SnippetCreateComponent} from "../snippet-create/snippet-create.component";
import {SnippetApi} from "../api.service";
import {FormBuilder} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-snippet-edit',
  templateUrl: './../snippet-create/snippet-create.component.html',
  styleUrls: ['../snippet-create/snippet-create.component.scss']
})
export class SnippetEditComponent extends SnippetCreateComponent {

    constructor(public formBuilder: FormBuilder,
                public api: SnippetApi,
                private route: ActivatedRoute) {
        super(formBuilder, api);
    }

    setSnippet() {
        let id = +this.route.snapshot.paramMap.get('id');
        this.api.get(id).subscribe((snippet) => {
            this.snippet = snippet;
        });
    }

}
