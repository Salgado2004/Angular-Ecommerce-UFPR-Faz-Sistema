import { Component, Input } from '@angular/core';
import { ProductInfo } from '../product-info';
import { GlobalEventEmitterService } from '../../shared/global-event-emitter.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  @Input() product: ProductInfo;
  quantidade: number = 0;

  disableBotao(): boolean {
    return this.quantidade <= 0 ? true:false;
  }   

  addProduto(): void {
    GlobalEventEmitterService.get('addIten').emit(this.product);
  }
}
