import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Snippet, SnippetApi} from "../api.service";
import {MatSnackBar} from "@angular/material";


const LANGUAGES = [
    {id: 'python', name: 'Python'},
    {id: 'javascript', name: 'JavaScript'},
    {id: 'c', name: 'C'},
];

@Component({
    selector: 'app-snippet-create',
    templateUrl: './snippet-create.component.html',
    styleUrls: ['./snippet-create.component.scss']
})
export class SnippetCreateComponent implements OnInit {

    snippet: Snippet;
    form: FormGroup;
    languages = LANGUAGES;

    constructor(public formBuilder: FormBuilder,
                public api: SnippetApi,
                public snackBar: MatSnackBar) { }

    ngOnInit() {
        this.setSnippet();
        this.setForm();
    }

    setForm() {
        this.form = this.formBuilder.group({
            'title': ['', Validators.required],
            'code': ['', Validators.required],
            'language': [''],
        });
    }

    setSnippet() {
        this.snippet = new Snippet(this.api, {language: null, owner: null});
    }

    onFormSubmit() {
        this.snippet.save().subscribe((snippet) => {
            this.snackBar.open('Cambios guardado con éxito', 'Cerrar', {
                duration: 20000,
            });
            // this.setForm();
            this.snippet = snippet;
        });
    }

}
