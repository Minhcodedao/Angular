import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { CommonModule } from '@angular/common';
import { IProduct } from '../../interfaces/Iproduct';

@Component({
  selector: 'app-product-edit',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './product-edit.component.html',
  styleUrl: './product-edit.component.css'
})
export class ProductEditComponent {
  
  form = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    price: [0, [Validators.required]],
    image: [''],
    description: ['']
  });
  
constructor(
  private formBuilder: FormBuilder, 
  private route: ActivatedRoute,
  private router: Router, 
  private productService: ProductService) {
this.route.params.subscribe(params => {
  const id = params['id'];
  this.productService.getProductsById(id).subscribe(product => {
    this.form.patchValue(product);
  })
})
}
onSubmit(){
  if (this.form.invalid) return;
  const id= this.route.snapshot.params['id']
  this.productService.updateProducts({id,...this.form.value} as IProduct).subscribe(() => {
    alert("Bạn đã cập nhật sản phẩm thành công")
    this.router.navigateByUrl('')
}
  )
}
}
