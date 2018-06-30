import { NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

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
]

@NgModule({
    imports: [RouterModule.forRoot(routes)], /*{ initialNavigation: 'enabled' }*/
    exports: [RouterModule]
})
export class AppRoutingModule {
    constructor() { }

}
