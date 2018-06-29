import { NgModule, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Routes, RouterModule, Router, NavigationEnd, NavigationStart, ActivatedRoute, UrlSegment } from '@angular/router';

//Components
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        data: {
            page: 'homepage',
        },
        resolve: {
       //     content: PageServiceResolve
        }
    },
    /*{
        path: 'powerview',
        redirectTo: '/operating-systems/motorized/powerview-motorization',
        pathMatch: 'full'
    },*/
    //Catch all to generic
    /*{
        path: '**',
        component: GenericComponent,
        resolve: {
            content: PageServiceResolve
        }
    }*/
]

@NgModule({
    imports: [RouterModule.forRoot(routes)], /*{ initialNavigation: 'enabled' }*/
    exports: [RouterModule]
})
export class AppRoutingModule {
    constructor() { }

}