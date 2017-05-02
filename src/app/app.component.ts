import { Component } from "@angular/core";

import { SidenavContainer } from "./containers/sidenav.container";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent extends SidenavContainer {
    title = 'Dashboard';

    constructor() {
        super();
    }
}
