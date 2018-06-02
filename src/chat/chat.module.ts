import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import * as fromContainers from './containers';
import * as fromComponents from './components';

const routes: Routes = [
  { path: '', component: fromContainers.ChatComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  declarations: [...fromContainers.containers, ...fromComponents.components]
})
export class ChatModule { }
