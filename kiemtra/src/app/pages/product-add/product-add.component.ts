import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { IProduct } from '../../interfaces/Iproduct';

@Component({
  selector: 'app-product-add',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './product-add.component.html',
  styleUrl: './product-add.component.css'
})
export class ProductAddComponent {
  form = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    price: [0, [Validators.required]],
    image: [''],
    description: ['']
  });
constructor(
  private formBuilder: FormBuilder, 
  private router: Router, 
  private productService: ProductService) {

}
onSubmit(){
  if (this.form.invalid) return;
  this.productService.addProducts(this.form.value as IProduct).subscribe(() => {
    alert("Bạn đã thêm sản phẩm thành công")
    this.router.navigateByUrl('')
  
}
  )
}
}
