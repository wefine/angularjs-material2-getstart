import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { FlexLayoutModule } from "@angular/flex-layout";
import { PerfectScrollbarModule } from "angular2-perfect-scrollbar";
import { ChartsModule } from "ng2-charts";
import { ChartModule } from "angular2-highcharts";

import { DashboardComponent } from "./dashboard/dashboard.component";
import { MdCardModule } from "@angular/material";

@NgModule({
    declarations: [
        DashboardComponent
    ],
    imports: [
        BrowserModule,
        FlexLayoutModule,
        CommonModule,
        PerfectScrollbarModule,
        ChartsModule,
        ChartModule,
        MdCardModule
    ],
    exports: [
        DashboardComponent
    ]
})
export class ComponentsModule {

}
