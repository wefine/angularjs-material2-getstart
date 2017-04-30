import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { MdButtonModule, MdCardModule, MdIconModule, MdMenuModule, MdToolbarModule } from "@angular/material";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppComponent } from "./app.component";

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
        MdButtonModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
