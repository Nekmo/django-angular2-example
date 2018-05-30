import { NgModule }             from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SnippetListComponent} from "./snippet-list/snippet-list.component";
import {SnippetDetailComponent} from "./snippet-detail/snippet-detail.component";
import {SnippetEditComponent} from "./snippet-edit/snippet-edit.component";
import {SnippetCreateComponent} from "./snippet-create/snippet-create.component";


const routes: Routes = [
    { path: '', redirectTo: '/list', pathMatch: 'full' },
    { path: 'list', component: SnippetListComponent, },
    { path: 'create', component: SnippetCreateComponent, },
    { path: ':id', component: SnippetDetailComponent, },
    { path: ':id/edit', component: SnippetEditComponent, },
];


@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}
