import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ApiService} from "./api.service";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
    imports: [
        CommonModule,
        HttpClientModule,
    ],
    declarations: [
    ]
})
export class DjangoModule { }
