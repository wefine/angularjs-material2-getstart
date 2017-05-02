import { NgModule } from "@angular/core";
import { FlexLayoutModule } from "@angular/flex-layout";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import {
    MdButtonModule,
    MdCardModule,
    MdIconModule,
    MdMenuModule,
    MdSidenavModule,
    MdToolbarModule
} from "@angular/material";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { UIRouterModule } from "@uirouter/angular";

import { PerfectScrollbarModule } from "angular2-perfect-scrollbar";
// third party javascript
import "hammerjs";
import "Chart.js";

import { AppComponent } from "./app.component";
import { ComponentsModule } from "./components/components.module";
import { SharedModule } from "./shared/shared.module";

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        BrowserAnimationsModule,
        MdToolbarModule,
        MdMenuModule,
        MdCardModule,
        MdIconModule,
        MdButtonModule,
        MdSidenavModule,

        FlexLayoutModule,
        UIRouterModule.forRoot(),
        PerfectScrollbarModule.forRoot({
            suppressScrollX: true
        }),
        ComponentsModule,
        SharedModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
