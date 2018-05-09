import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {DjangoModule} from "./django/django.module";
import {
    MatButtonModule, MatFormFieldModule, MatIconModule, MatListModule, MatPaginatorModule, MatSortModule,
    MatTableModule,
    MatToolbarModule
} from "@angular/material";
import { SnippetListComponent } from './snippet-list/snippet-list.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
    declarations: [
        AppComponent,
        SnippetListComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        // FlexLayoutModule,

        DjangoModule,

        MatButtonModule,
        MatToolbarModule,
        MatListModule,
        MatIconModule,
        AppRoutingModule,
        MatFormFieldModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,

    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
