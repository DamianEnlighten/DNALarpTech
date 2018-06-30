import { Component, OnInit,  PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import Swiper from 'swiper';

@Component({
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    constructor(
        @Inject(PLATFORM_ID) private platform_id,
    ) { }

    ngOnInit() {
        let isBrowser = isPlatformBrowser(this.platform_id);
        if (isBrowser) {
      }

      var mySwiper = new Swiper('.swiper-container', { });
    }
}
