import { Component, Input, OnInit } from "@angular/core";
import { MdSidenav } from "@angular/material";

@Component({
    selector: 'toolbar',
    templateUrl: './toolbar.html'
})
export class ToolbarComponent implements OnInit {

    @Input() public sidenav: MdSidenav;
    icon: String = 'keyboard_arrow_left';
    @Input() title: String;

    constructor() {
    }

    ngOnInit() {
    }

    toggleSidenav() {
        if (this.sidenav != null) {
            if (this.sidenav.opened) {
                this.icon = 'keyboard_arrow_right';
            } else {
                this.icon = 'keyboard_arrow_left';
            }
            this.sidenav.toggle();
        }
    }
}
