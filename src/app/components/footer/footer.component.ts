import { Component, OnInit,  PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
    selector: 'footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

    constructor(
        @Inject(PLATFORM_ID) private platform_id,
    ) { }

    ngOnInit() {
        let isBrowser = isPlatformBrowser(this.platform_id);
        if (isBrowser) {
        }
    }
}