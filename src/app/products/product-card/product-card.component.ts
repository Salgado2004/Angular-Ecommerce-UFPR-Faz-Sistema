import { Component } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  quantidade: number = 0;

  disableBotao(): boolean {
    return this.quantidade <= 0 ? true:false;
  }   

  addProduto(): void {
    alert('Produto adicionado ao carrinho!');
  }
}
