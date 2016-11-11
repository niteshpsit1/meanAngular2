import { Component } from '@angular/core';


import {headerComponent} from './shared/app.headerComponent';


@Component({
    selector: 'mindMax',
     template: `
    <router-outlet></router-outlet>
    <!-- Basically dump the content of view in router outlet -->`,
})
export class baseComponent {
    
}
