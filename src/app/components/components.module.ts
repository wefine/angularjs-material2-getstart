import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { MaterialModule } from "@angular/material";
import { FlexLayoutModule } from "@angular/flex-layout";
import { PerfectScrollbarModule } from "angular2-perfect-scrollbar";
import { ChartsModule } from "ng2-charts";

import { DashboardComponent } from "./dashboard/dashboard.component";

@NgModule({
    declarations: [
        DashboardComponent
    ],
    imports: [
        BrowserModule,
        MaterialModule,
        FlexLayoutModule,
        CommonModule,
        PerfectScrollbarModule,
        ChartsModule
    ],
    exports: [
        DashboardComponent
    ]
})
export class ComponentsModule {

}
