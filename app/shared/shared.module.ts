import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { DataService } from "./data.service";

@NgModule({
    providers: [
        DataService
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class SharedModule { }
