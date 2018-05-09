import { NgModule }             from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SnippetListComponent} from "./snippet-list/snippet-list.component";


const routes: Routes = [
    { path: '', redirectTo: '/list', pathMatch: 'full' },
    { path: 'list', component: SnippetListComponent, },
];


@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}
