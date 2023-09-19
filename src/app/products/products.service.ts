import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products = [
    { id: 1,
      name: 'Câmera fotográfica', 
      price: 3064.99, 
      image: '../../../assets/products/camera.jpg',
      description: 'Câmera fotográfica profissional com 24.2 megapixels e lente 18-55mm',
      category: 'Eletrônicos',
      rating: 4.5
    },
    { id: 2,
      name: 'Smartphone',
      price: 1999.99,
      image: '../../../assets/products/smartphone.jpg',
      description: 'Smartphone Samsung Galaxy A71 128GB Azul 6GB RAM',
      category: 'Eletrônicos',
      rating: 4.8
    },
    { id: 3,
      name: 'Your heart is the sea - capa dura',
      price: 79.90,
      image: '../../../assets/products/book-cover.jpg',
      description: 'Livro de poesias de Nikita Gill',
      category: 'Livros',
      rating: 3.5
    },
    { id: 4,
      name: 'Mouse sem fio - Apple',
      price: 59.90,
      image: '../../../assets/products/apple-mouse.png',
      description: 'Mouse sem fio Apple Magic Mouse 2',
      category: 'Eletrônicos',
      rating: 2.5
    },
    { id: 5,
      name: 'Kit de maquiagem',
      price: 44.90,
      image: '../../../assets/products/makeup.png',
      description: 'Kit de maquiagem com 10 itens',
      category: 'Beleza',
      rating: 4.5
    }
  ]

  constructor() { }

  getProducts() {
    return this.products
  }

}
