import { HostListener, OnInit } from "@angular/core";

export abstract class SidenavContainer implements OnInit {

    /**
     * Sidenav mode, sidenav is 'side' or 'over', when it is side, sidenav appears
     * on side of the content, when it is over, sidenav appears over the content.
     * @DefaultValue: side
     */
    protected mode: String = 'side';

    /**
     * Whether the sidenav is open or not, true value keeps the sidenav opened.
     * @defaultValue: true
     */
    protected opened: Boolean = true;

    /**
     * Sidenav from a SidenavContainer mode, set which mode sidenav will have
     * according the implementation of this method.
     * @return string value.
     */
    protected setSidenavMode(mode: String): void {
        this.mode = mode;
    }

    /**
     * Sidenav from SidenavContainer opened, set whether the sidenav is open or
     * not according the implementation of this method.
     * @return boolean value.
     */
    protected setSidenavIsOpened(opened: Boolean): void {
        this.opened = opened;
    }

    /**
     * Update sidenav mode and opened according the innerWidth from window when this
     * class is initialized.
     * @param innerWidth innerWidth from window.
     */
    protected updateSidenav(innerWidth: Number): void {
        if (window.innerWidth <= 960) {
            this.setSidenavMode('over');
            this.setSidenavIsOpened(false);
        } else if (window.innerWidth <= 1024) {
            this.setSidenavMode('side');
            this.setSidenavIsOpened(false);
        } else {
            this.setSidenavMode('side');
            this.setSidenavIsOpened(true);
        }
    }

    /**
     * Window resizing will change the mode and opened attributes of Sidenav from a
     * SidenavContainer according the implementation of this method.
     * @param event the event triggered by window.onresize event.
     */
    @HostListener('window:resize', ['$event'])
    protected resizing(event): void {
        if (event.target.innerWidth <= 960) {
            this.setSidenavMode('over');
            this.setSidenavIsOpened(false);
        } else if (event.target.innerWidth <= 1024) {
            this.setSidenavMode('side');
            this.setSidenavIsOpened(false);
        } else {
            this.setSidenavMode('side');
            this.setSidenavIsOpened(true);
        }
    }

    /**
     * On init this class, the window innerWidth is checked and side and mode values are updated
     * according the innerWidth of window.
     * @param window.innerWidth innerWidth from window
     */
    ngOnInit() {
        this.updateSidenav(window.innerWidth);
    }
}
