import { Component, OnInit } from '@angular/core';
import {SnippetCreateComponent} from "../snippet-create/snippet-create.component";
import {SnippetApi} from "../api.service";
import {FormBuilder} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {MatSnackBar} from "@angular/material";

@Component({
  selector: 'app-snippet-edit',
  templateUrl: './../snippet-create/snippet-create.component.html',
  styleUrls: ['../snippet-create/snippet-create.component.scss']
})
export class SnippetEditComponent extends SnippetCreateComponent {

    constructor(public formBuilder: FormBuilder,
                public api: SnippetApi,
                public snackBar: MatSnackBar,
                private route: ActivatedRoute) {
        super(formBuilder, api, snackBar);
    }

    setSnippet() {
        let id = +this.route.snapshot.paramMap.get('id');
        this.api.get(id).subscribe((snippet) => {
            this.snippet = snippet;
        });
    }

}
