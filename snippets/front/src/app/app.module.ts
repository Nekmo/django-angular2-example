import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {DjangoModule} from "@angular/django";
import {
    MatButtonModule, MatCardModule, MatFormFieldModule, MatIconModule, MatInputModule, MatListModule, MatMenuModule,
    MatPaginatorModule, MatSelectModule, MatSnackBarModule, MatSortModule,
    MatTableModule,
    MatToolbarModule, MatTooltipModule
} from "@angular/material";
import { SnippetListComponent } from './snippet-list/snippet-list.component';
import { AppRoutingModule } from './app-routing.module';
import {MomentModule} from "angular2-moment";
import {CountdownComponent, DurationComponent, TimeAgoComponent} from "./datetime/datetime.component";
import { SnippetDetailComponent } from './snippet-detail/snippet-detail.component';
import {HighlightModule, HighlightOptions} from "ngx-highlightjs";
import {FlexLayoutModule} from "@angular/flex-layout";
import { SnippetEditComponent } from './snippet-edit/snippet-edit.component';
import { SnippetCreateComponent } from './snippet-create/snippet-create.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { SnippetHeaderComponent } from './snippet-header/snippet-header.component';


const options: HighlightOptions = {
 theme: 'monokai',
};


@NgModule({
    declarations: [
        AppComponent,
        SnippetListComponent,
        TimeAgoComponent,
        CountdownComponent,
        DurationComponent,
        SnippetDetailComponent,
        SnippetEditComponent,
        SnippetCreateComponent,
        SnippetHeaderComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        MomentModule,
        HighlightModule.forRoot(options),
        FlexLayoutModule,

        DjangoModule,

        MatButtonModule,
        MatToolbarModule,
        MatListModule,
        MatIconModule,
        AppRoutingModule,
        MatFormFieldModule,
        MatTableModule,
        MatCardModule,
        MatPaginatorModule,
        MatTooltipModule,
        MatSortModule,
        MatInputModule,
        MatSelectModule,
        MatMenuModule,
        MatSnackBarModule,

    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
