import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent {
  form = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });
constructor(
  private formBuilder: FormBuilder, 
  private router: Router, 
  private authService: AuthService) {

}
onSubmit(){
 if(this.form.invalid) return;
  this.authService.signin(this.form.value as {email:string, password:string}).subscribe((user) => {
    alert("Đăng nhập thành công")
    localStorage.setItem('user', JSON.stringify(user))
    this.router.navigateByUrl('')
  }, (error) => {
    alert("Đăng nhập thất bại")
  })

}
}
