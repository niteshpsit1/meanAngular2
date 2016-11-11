import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';

import { AppModule } from './app.module';

platformBrowserDynamic().bootstrapModule(AppModule, [HttpModule, FormsModule]); // Bootstrap HttpModule, FormsModule
