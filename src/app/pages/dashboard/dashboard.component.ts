import { Component, inject, OnInit } from '@angular/core';
import { AuthService } from '../../core/sevices/auth.service';
import { User } from '../../core/model/common.model';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent implements OnInit {
  private authService = inject(AuthService);
  user!: User;

  logout() {
    this.authService.logout();
  }

  ngOnInit(): void {
    this.authService.me().subscribe({
      next: response => {
        console.log(response);
        this.user = response.data;
      },
    });
  }
}
