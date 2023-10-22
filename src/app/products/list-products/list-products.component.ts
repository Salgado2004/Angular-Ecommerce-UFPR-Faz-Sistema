import { Component } from '@angular/core';
import { ProductsService } from '../products.service';
import { GlobalEventEmitterService } from '../../shared/global-event-emitter.service';
import { MatSnackBar, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent {
  products = [];
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(private productsService: ProductsService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.productsService.getProducts().subscribe((data: any) => {
      this.products = data.products;
    });

    GlobalEventEmitterService.get('addIten').subscribe((product: any) => {
      this._snackBar.open('Produto adicionado ao carrinho!', 'Fechar', {
        duration: 2000,
        verticalPosition: this.verticalPosition
      });
    });
  }

}
