import { NgModule } from "@angular/core";
import { MaterialModule } from "@angular/material";

import { ToolbarComponent } from "./toolbar/toolbar.component";
import { SidenavComponent } from "./sidenav/sidenav.component";

@NgModule({
    imports: [MaterialModule],
    exports: [
        ToolbarComponent,
        SidenavComponent
    ],
    declarations: [
        ToolbarComponent,
        SidenavComponent
    ],
    providers: [],
})
export class SharedModule {
}
