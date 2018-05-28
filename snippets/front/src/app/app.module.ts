import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {DjangoModule} from "@angular/django";
import {
    MatButtonModule, MatFormFieldModule, MatIconModule, MatListModule, MatPaginatorModule, MatSortModule,
    MatTableModule,
    MatToolbarModule, MatTooltipModule
} from "@angular/material";
import { SnippetListComponent } from './snippet-list/snippet-list.component';
import { AppRoutingModule } from './app-routing.module';
import {MomentModule} from "angular2-moment";
import {CountdownComponent, DurationComponent, TimeAgoComponent} from "./datetime/datetime.component";

@NgModule({
    declarations: [
        AppComponent,
        SnippetListComponent,
        TimeAgoComponent,
        CountdownComponent,
        DurationComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MomentModule,
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
        MatTooltipModule,
        MatSortModule,

    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
