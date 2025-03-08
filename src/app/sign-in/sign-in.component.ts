import { Component } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../services/auth.service';

@Component({
    selector: 'app-sign-in',
    imports: [RouterLink, FormsModule, CommonModule],
    templateUrl: './sign-in.component.html',
    styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {
    userData = {
        email: '',
        password: ''
    };
    
    isLoading = false;
    errorMessage = '';
    successMessage = '';

    constructor(
        private http: HttpClient, 
        private router: Router,
        private authService: AuthService
    ) {}

    onSubmit() {
        this.isLoading = true;
        this.errorMessage = '';
        this.successMessage = '';

        // Use AuthService for login
        this.authService.login(this.userData.email, this.userData.password)
            .subscribe({
                next: (response: any) => {
                    this.isLoading = false;
                    this.successMessage = 'Login successful! Redirecting...';
                    
                    // Redirect to AI chatbot page after successful login
                    setTimeout(() => {
                        this.router.navigate(['/aichatbot']);
                    }, 1500);
                },
                error: (error) => {
                    this.isLoading = false;
                    if (error.status === 0) {
                        this.errorMessage = 'Cannot connect to the server. Please check your internet connection or the server might be down.';
                    } else if (error.error && error.error.message) {
                        this.errorMessage = error.error.message;
                    } else {
                        this.errorMessage = 'Login failed. Please check your credentials and try again.';
                    }
                    console.error('Login error:', error);
                }
            });
    }
}
