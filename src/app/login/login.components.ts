import { Component, OnInit } from '@angular/core';
import { authServices } from '../servive/auth.services';

//permite a la clase ejecutarse como component
@Component({
    selector: 'login',
    templateUrl: './login.components.html'
})
//declaracion de componente
export class LoginComponent implements OnInit {
    constructor(private authService: authServices) { }

    ngOnInit(): void {
        console.log('Click');
    }

    login(): void {
        this.authService.login();
    }
}