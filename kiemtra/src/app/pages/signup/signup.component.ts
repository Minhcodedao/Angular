import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  form = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    confirmPassword: ['', [Validators.required]]
  }, {
    validator: (form: FormGroup) => {
      const password = form.get('password')?.value || '';
      const confirmPassword = form.get('confirmPassword')?.value || '';

      return password === confirmPassword ? null : { notMatch: true}
    }
  });
constructor(
  private formBuilder: FormBuilder, 
  private router: Router, 
  private authService: AuthService) {

}
onSubmit(){
 if(this.form.invalid) return;
  this.authService.signup(this.form.value).subscribe(() => {
    alert("Đăng ký thành công")
    this.router.navigateByUrl('/signin')
  })

  
}
}
