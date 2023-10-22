import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppHeaderComponent } from './app-header/app-header.component';
import { MoneyPipe } from './money.pipe';

import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { GlobalEventEmitterService } from './global-event-emitter.service';


@NgModule({
  declarations: [
    AppHeaderComponent,
    MoneyPipe
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatBadgeModule
  ],
  exports: [
    AppHeaderComponent, 
    MoneyPipe
  ]
})
export class SharedModule {
}
