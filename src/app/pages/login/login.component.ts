import { Component, inject } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../core/sevices/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  form: FormGroup;
  private authService = inject(AuthService);
  private router = inject(Router);

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
  }

  onSubmit() {
    if (this.form.valid) {
      this.authService.login(this.form.value).subscribe({
        next: () => {
          this.router.navigate(['']);
        },
      });
    }
  }
}
