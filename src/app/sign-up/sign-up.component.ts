import { Component } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

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

    constructor(private http: HttpClient, private router: Router) {}

    onSubmit() {
        this.isLoading = true;
        this.errorMessage = '';
        this.successMessage = '';

        // Call the registration API
        this.http.post('http://135.181.181.121:3003/api/auth/register', this.userData)
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
                    if (error.error && error.error.message) {
                        this.errorMessage = error.error.message;
                    } else {
                        this.errorMessage = 'Registration failed. Please try again.';
                    }
                    console.error('Registration error:', error);
                }
            });
    }
}
