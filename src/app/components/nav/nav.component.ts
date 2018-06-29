import { Component, OnInit,  PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
    selector: 'nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

    constructor(
        @Inject(PLATFORM_ID) private platform_id,
    ) { }

    ngOnInit() {
        let isBrowser = isPlatformBrowser(this.platform_id);
        if (isBrowser) {
        }
    }
}