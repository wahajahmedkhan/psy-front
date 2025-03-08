import { Component } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../services/auth.service';

@Component({
    selector: 'app-sign-up',
    imports: [RouterLink, FormsModule, CommonModule],
    templateUrl: './sign-up.component.html',
    styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
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
        // Validate email format
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(this.userData.email)) {
            this.errorMessage = 'Please enter a valid email address.';
            return;
        }
        
        // Validate password length
        if (this.userData.password.length < 6) {
            this.errorMessage = 'Password must be at least 6 characters long.';
            return;
        }

        this.isLoading = true;
        this.errorMessage = '';
        this.successMessage = '';
        
        // Use AuthService for registration
        this.authService.register(this.userData.email, this.userData.password)
            .subscribe({
                next: (response) => {
                    this.isLoading = false;
                    this.successMessage = 'Registration successful! Redirecting to login...';
                    
                    // Redirect to sign-in page after successful registration
                    setTimeout(() => {
                        this.router.navigate(['/sign-in']);
                    }, 2000);
                },
                error: (error) => {
                    this.isLoading = false;
                    
                    if (error.status === 0) {
                        this.errorMessage = 'Cannot connect to the server. Please check your internet connection or the server might be down.';
                    } else if (error.error && error.error.message) {
                        this.errorMessage = error.error.message;
                    } else {
                        this.errorMessage = 'Registration failed. Please try again.';
                    }
                    console.error('Registration error:', error);
                }
            });
    }
}
