import { ProductService } from './../product.service';
import { Product } from './../product-create/product.model';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {

  product!: Product;

  constructor(
    private productService:ProductService, 
    private router: Router,
    private route: ActivatedRoute
  ) {  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');  
    this.productService.readById(id!).subscribe(product => {
      this.product = product
      })
  }

  deleteProduct() {
    this.productService.delete(this.product.id!).subscribe(() => {
      this.productService.showMassage('Produto excluído com sucesso')
      this.router.navigate(['/products']);
    })
  }
  cancel(): void {
    this.router.navigate(['/products']);
  }

}
