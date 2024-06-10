import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { IProduct } from '../../interfaces/Iproduct';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {

products!: IProduct[];
constructor(private productService: ProductService, private router: Router){
  this.productService.getAllProducts().subscribe(products => this.products = products)
}
navigateToAddProduct() {
  this.router.navigate(['/add']);
}
onRemove(id: number){
  const confirm = window.confirm("Bạn có chắc chắn muốn xóa sản phẩm không")
  if(confirm){
    this.productService.removeProducts(id).subscribe(() => {
      alert("Bạn đã xóa sản phảm thành công")
      this.products = this.products.filter(product => product.id !== id)
    })
  }
}
onEdit(id: number){
this.router.navigate(['/edit', id])
}
}

