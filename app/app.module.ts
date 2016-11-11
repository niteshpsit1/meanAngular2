/* Core Module */
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import  {Route, Router, RouterLink, RouterModule, RouterOutlet} from '@angular/router';
/**/

/** Base Container */
import { baseComponent }  from './app.baseComponent';
/* */

/* Pages and directives */
import { landingComponent } from './landing/app.landingComponent';
import { AuthComponent }  from './auth/app.registerComponent';
import { headerComponent } from './shared/app.headerComponent';
/**/

@NgModule({
  
  imports:      [ BrowserModule, HttpModule, FormsModule,NgbModule.forRoot(), 
                  RouterModule.forRoot([
                    { path: '', component: landingComponent, data : {'title' : 'MindMax'} },
                    { path: 'base', component: baseComponent, data : {'title' : 'MindMax'} }, // Just a container to load Views
                    { path: 'register', component: AuthComponent, data: {'title' : 'Login'} }
                  ])
               ],
  declarations: [baseComponent, AuthComponent, headerComponent, landingComponent],
  providers :   [HttpModule],
  bootstrap:    [baseComponent]
})
export class AppModule { }
