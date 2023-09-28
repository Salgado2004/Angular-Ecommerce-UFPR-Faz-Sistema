import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';
import { ProductsRoutingModule } from './products-routing.module';
import { ListProductsComponent } from './list-products/list-products.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { RatingComponent } from './rating/rating.component';
import { ProductsService } from './products.service';

@NgModule({
  declarations: [
    ListProductsComponent,
    ProductCardComponent,
    RatingComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ProductsRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ ProductsService]
})
export class ProductsModule { }
