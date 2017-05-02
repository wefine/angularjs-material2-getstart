import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'sidenav',
    templateUrl: './sidenav.html',
    styleUrls: ['./sidenav.css']
})
export class SidenavComponent implements OnInit {

    name: String = 'Material Admin';

    constructor() {
    }

    ngOnInit() {
    }
}
