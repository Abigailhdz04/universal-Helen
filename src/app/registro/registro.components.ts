import { Component, OnInit } from '@angular/core';

//permite a la clase ejecutarse como componente
@Component({
    selector: 'registro',
    templateUrl: './registro.components.html'
})
//declaracion de componente
export class RegistroComponent implements OnInit {
    ngOnInit(): void {
        console.log('Click');
    }

    registro(): void {
        console.log('Click');
    }
}
