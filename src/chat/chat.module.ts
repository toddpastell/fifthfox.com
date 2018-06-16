import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import * as fromContainers from './containers';
import * as fromComponents from './components';
import * as fromServices from './services';

const routes: Routes = [
  { path: '', component: fromContainers.ChatComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  declarations: [...fromContainers.containers, ...fromComponents.components],
  providers: [...fromServices.services],
})
export class ChatModule { }
