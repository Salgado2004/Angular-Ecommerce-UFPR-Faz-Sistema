import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppHeaderComponent } from './app-header/app-header.component';
import { MoneyPipe } from './money.pipe';


@NgModule({
  declarations: [
    AppHeaderComponent,
    MoneyPipe
  ],
  imports: [CommonModule],
  exports: [
    AppHeaderComponent, 
    MoneyPipe
  ]
})
export class SharedModule {
}
