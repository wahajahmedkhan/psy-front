import { Component } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

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

    constructor(private http: HttpClient, private router: Router) {}

    onSubmit() {
        this.isLoading = true;
        this.errorMessage = '';
        this.successMessage = '';

        // Call the login API
        this.http.post('http://135.181.181.121:3003/api/auth/login', this.userData)
            .subscribe({
                next: (response: any) => {
                    this.isLoading = false;
                    this.successMessage = 'Login successful! Redirecting...';
                    
                    // Store the token in localStorage
                    if (response && response.token) {
                        localStorage.setItem('auth_token', response.token);
                    }
                    
                    // Redirect to dashboard or home page after successful login
                    setTimeout(() => {
                        this.router.navigate(['/dashboard']);
                    }, 1500);
                },
                error: (error) => {
                    this.isLoading = false;
                    if (error.error && error.error.message) {
                        this.errorMessage = error.error.message;
                    } else {
                        this.errorMessage = 'Login failed. Please check your credentials and try again.';
                    }
                    console.error('Login error:', error);
                }
            });
    }
}
