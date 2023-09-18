import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppHeaderComponent } from './app-header/app-header.component';


@NgModule({
  declarations: [
    AppHeaderComponent
  ],
  imports: [CommonModule],
  exports: [AppHeaderComponent]
})
export class SharedModule {
}
