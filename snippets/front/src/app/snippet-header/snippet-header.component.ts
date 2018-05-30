import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Snippet} from "../api.service";
import {FormBuilder} from "@angular/forms";

@Component({
    selector: 'snippet-header',
    templateUrl: './snippet-header.component.html',
    styleUrls: ['./snippet-header.component.scss']
})
export class SnippetHeaderComponent implements OnInit {

    @Input() snippet: Snippet;
    @Input() action: 'edit' | 'detail';
    @Input() form: FormBuilder;
    @Output() submit: EventEmitter<any> = new EventEmitter();

    constructor() { }

    ngOnInit() {
    }

    onSave() {
        this.submit.emit();
    }
}
